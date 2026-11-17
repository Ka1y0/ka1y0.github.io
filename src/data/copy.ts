import { pair as t } from "./projects";
export const copy = {
  nav: [
    t("Home", "首页"),
    t("Work", "作品"),
    t("Research", "研究"),
    t("About", "关于"),
  ],
  homeTitle: t("Art in the loop.", "创作，在循环之中。"),
  intro: t(
    "I’m Kaiyo. I explore how people and AI make things together through generative art, software and interaction design.",
    "我是 Kaiyo。我通过生成艺术、软件与交互设计，探索人与 AI 如何共同创作。",
  ),
  index: t("Explore my work", "浏览作品"),
  selected: t("Selected work", "精选作品"),
  all: t("All work", "全部作品"),
  visual: t("Procedural study", "程序化习作"),
  artName: t("Continuous form", "连续形态"),
  selectedIntro: t(
    "From a harbor rendered six ways to a notebook that answers back.",
    "从一座拥有六种画风的港口，到一本会回应的手写笔记。",
  ),
  workIntro: t(
    "Scenes, interfaces and systems. Each project gives a different shape to a question about making things with machines.",
    "场景、界面与系统。每个项目都用不同的形式探讨人与机器共同创作时遇到的问题。",
  ),
  researchIntro: t(
    "My research interests begin where the image meets the interface. These questions guide my practice in art, design and software.",
    "我的研究兴趣始于图像与界面相遇的地方。这些问题引导着我在艺术、设计与软件中的实践。",
  ),
  research: [
    [
      t("What holds a world together?", "是什么让世界保持连贯？"),
      t(
        "A scene can change from a woodblock-inspired palette to a pencil drawing while its tide and its people keep moving. In Pixel Harbor, switching styles makes it possible to examine which details carry the identity of a place.",
        "一个场景可以从木刻风格的配色切换为铅笔画，而潮水与居民仍然在动。在 Pixel Harbor 中，切换风格让人得以观察哪些细节维系着一个地方的独特性。",
      ),
      "pixel-harbor",
    ],
    [
      t("When should an interface reply?", "界面应在何时回应？"),
      t(
        "A handwritten page has its own rhythm. Project Diary uses an intentional gesture to separate time spent writing from the moment a system is invited to respond. That boundary raises questions about agency and attention.",
        "手写页面有自己的节奏。Project Diary 以主动手势划分书写的时间与邀请系统回应的时刻。这条界线引出了有关主体性与注意力的问题。",
      ),
      "project-diary",
    ],
    [
      t("What can a collaborator inspect?", "协作者可以审阅什么？"),
      t(
        "In a multi-agent system, authorship also involves choosing, revising and accepting work. CHIPS Agent Fabric gives this question a concrete setting through recorded task history and handoffs.",
        "在多 agent 系统中，作者的工作也包括选择、修改与验收。CHIPS Agent Fabric 用任务历史与交接记录，为这个问题提供了可以实际观察的情境。",
      ),
      "chips-agent-fabric",
    ],
  ] as const,
  aboutIntro: t(
    "I’m Kaiyo, a creator with a background in art and design research. I make software to explore what people can draw, notice and decide with the help of AI.",
    "我是 Kaiyo，有艺术与设计研究背景。我通过制作软件，探索人们借助 AI 能描绘什么、察觉什么，以及如何做判断。",
  ),
  aboutBody: t(
    "I lead Chips Studio, an independent AI-native product and creative studio. I set the direction, evaluate the experience and decide what to publish. AI collaborators take part in research, design, implementation and testing.",
    "我推进独立 AI-native 产品与创作工作室 Chips Studio。我确定方向、验收体验，并决定何时发布。AI 协作者参与研究、设计、实现与测试。",
  ),
  aboutLink: t("Visit Chips Studio", "前往薯条工作室"),
  contact: t("Find me on GitHub", "在 GitHub 上找到我"),
  cross: t("Inside Chips Studio", "走进薯条工作室"),
  crossIntro: t(
    "The independent studio where I develop products and experiments with AI collaborators.",
    "我与 AI 协作者共同开发产品和实验的独立工作室。",
  ),
  role: t("How I work", "我的工作方式"),
  roleBody: t(
    "Across these projects I guide direction, review the experience and make publication decisions. The project notes below describe the implementation and the collaboration documented for this work.",
    "在这些项目中，我负责方向、体验验收与发布决策。以下记录介绍这个作品已公开的具体实现与协作方式。",
  ),
  question: t("The question", "探索的问题"),
  design: t("Design decisions", "设计判断"),
  result: t("What exists today", "当前成果"),
  evidence: t("Explore the project", "探索项目"),
  source: t("Public repository", "公开仓库"),
  open: t("Public source & license", "公开源码与许可"),
  platform: t("Platform", "平台"),
  state: t("Status", "状态"),
  date: t("Verified", "核验日期"),
  skip: t("Skip to content", "跳到正文"),
  next: t("Next project", "下一个项目"),
  figure: t(
    "Pixel Harbor · Ukiyo-e Pixel view",
    "Pixel Harbor · 浮世绘像素视图",
  ),
  alt: t(
    "A low-resolution harbor with torii gates, boats, a village and a distant mountain.",
    "低分辨率港口画面中有鸟居、船只、村落与远山。",
  ),
  loopAlt: t(
    "An orange loop made of closely spaced lines, folded into a continuous knot.",
    "由细密线条构成的橙色曲线折叠成连续的结。",
  ),
};
