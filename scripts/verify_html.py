"""Validate static documents as served at the site's canonical base path."""
import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.canonicals = []
        self.errors = []
        self.language = None
        self.ids = set()
        self.headings = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "h1":
            self.headings += 1
        if tag == "img" and "alt" not in attrs:
            self.errors.append("Image is missing alt text")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        for field in ("href", "src", "poster"):
            if attrs.get(field):
                self.links.append(attrs[field])


def validate(root, base):
    documents = {}
    failures = []
    for path in sorted(root.rglob("*.html")):
        route = path.relative_to(root).as_posix().removesuffix("index.html")
        url = urljoin(base, route)
        doc = Document()
        doc.feed(path.read_text())
        documents[urlsplit(url).path] = doc
        if not doc.language or doc.headings != 1:
            doc.errors.append("Expected a document language and one h1")
        if path.name != "404.html" and doc.canonicals != [url]:
            doc.errors.append(f"Canonical must be {url}")
        failures.extend(f"{route}: {message}" for message in doc.errors)
    if not documents:
        failures.append("No generated HTML found")
    for route, doc in documents.items():
        for link in doc.links:
            # Absolute external and sibling-site links are checked in browser QA.
            if urlsplit(link).netloc or urlsplit(link).scheme:
                continue
            target = urlsplit(urljoin(urljoin(base, route), link))
            prefix = urlsplit(base).path
            if not target.path.startswith(prefix):
                failures.append(f"{route}: link escapes base: {link}")
                continue
            local = root / unquote(target.path[len(prefix):])
            if local.is_dir():
                local = local / "index.html"
            if not local.is_file():
                failures.append(f"{route}: missing target: {link}")
            other = documents.get(target.path)
            if other and target.fragment and unquote(target.fragment) not in other.ids:
                failures.append(f"{route}: missing anchor: {link}")
    if failures:
        raise SystemExit("\n".join(failures))
    print(f"Verified {len(documents)} HTML documents at {base}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("base")
    parser.add_argument("--dist", default="dist", type=Path)
    args = parser.parse_args()
    validate(args.dist, args.base)
