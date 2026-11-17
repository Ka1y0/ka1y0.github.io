# Cloud workflow

GitHub records the website source, release commits, Actions runs, and Pages deployments. The project’s private archive preserves immutable snapshots, design assets, verification evidence, and handoffs.

1. Use the private project index configured for the workspace. Read the project status, latest handoff, and snapshot manifest in that order. Then check the local branch and worktree, actual GitHub commit, and deployed revision.
2. At a release or other substantive milestone, record the commit, build and deployment results, URLs, and verification time. Freeze a reviewed source snapshot with its lockfile, build configuration, allowed assets, and acceptance evidence. Include Git history only as a reviewed, recoverable bundle.
3. Record each member’s size and SHA-256 in a manifest. After uploading to the private archive, fetch the complete remote bytes into a fresh directory, verify the manifest, and restore and build there. Report deployment, byte verification, and restore outcomes independently.
4. Append a timestamped immutable handoff. A single coordinator rereads current status and index before updating them and verifies the written versions. Keep other coordinators’ changes by stopping on conflict.
5. Keep internal links, file identifiers, status, credentials, and handoffs out of this repository and generated site. Archive at explicit milestones. Exclude active worktrees, Git metadata directories, credentials, and caches from synchronization.
