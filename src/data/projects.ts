import { identity } from "../../site.config.mjs";
export type Language = "en" | "zh";
export const pair = (en: string, zh: string) => ({ en, zh });
const github = identity.github + "/";
export const projects = [
  {
    slug: "pixel-harbor",
    name: "Pixel Harbor",
    repo: "Tool_Agentic_Graphics",
    platform: "Web · Three.js",
    discipline: pair("Realtime worlds", "实时世界"),
    status: pair("Public demo", "公开演示"),
    license: "MIT (Agentic_Graphics code and documentation)",
    licenseZh: "MIT（Agentic_Graphics 代码与文档）",
    summary: pair(
      "One Japanese harbor, six ways of seeing it.",
      "同一座日式港口，六种观看方式。",
    ),
    question: pair(
      "What makes a place recognizable when its entire visual language changes? A harbor, its boats and its inhabitants provide a single scene for comparing six rendering styles.",
      "当画面的视觉语言彻底改变，是什么让人仍能认出同一个地方？港口、船只和居民构成同一场景，供观众比较六种渲染风格。",
    ),
    design: pair(
      "Human direction and agent-assisted implementation shaped the scene through repeated visual checks. Geometry, weather and world time stay shared. Each style changes the palette, shading and outlines, so switching from Ukiyo-e Pixel to Blueprint preserves the moment.",
      "通过人的视觉指导、agent 辅助实现和反复验收，我们逐步确定了场景的表现方式。几何、天气和世界时间保持一致，各种风格分别调整配色、着色与轮廓，因此从浮世绘像素切换到蓝图时，同一个瞬间仍然延续。",
    ),
    result: pair(
      "The live Three.js world belongs to Agentic_Graphics as a standalone reference work. Its scene-specific rendering features have their own implementation.",
      "这个可在线体验的 Three.js 世界是 Agentic_Graphics 的独立参考作品，场景中的渲染功能有专门的实现。",
    ),
    links: [
      {
        name: pair("Enter the harbor", "进入港口"),
        url: "https://ka1y0.github.io/Tool_Agentic_Graphics/pixel-harbor/",
      },
      {
        name: pair("Technical case study", "技术案例"),
        url:
          github +
          "Tool_Agentic_Graphics/blob/main/docs/showcases/pixel-harbor.md",
      },
    ],
  },
  {
    slug: "project-diary",
    name: "Project Diary",
    repo: "Project_Diary",
    platform: "iPad · Apple Pencil",
    discipline: pair("Reflective interfaces", "反思性交互"),
    status: pair("Alpha prototype", "Alpha 原型"),
    license: "MIT (original code), OFL (bundled fonts)",
    licenseZh: "MIT（原创代码），OFL（随附字体）",
    summary: pair(
      "A handwritten page that leaves room for a reply.",
      "为回应留出空间的手写页面。",
    ),
    question: pair(
      "Can a writing interface respond without disturbing the pace of handwriting? Project Diary explores this question with a single paper-like surface and a pencil.",
      "书写界面能否做出回应，同时保留手写的节奏？Project Diary 用一张仿纸页面和一支笔探索这个问题。",
    ),
    design: pair(
      "Made within Chips Studio’s human–AI practice, the prototype keeps writing at the center. PencilKit captures marks. A gesture invites a reply, and animated type lets it arrive on the page. The offline mode selects mock prompts. An optional remote provider receives the submitted page image.",
      "这是 Chips Studio 人机协作实践中的原型。设计把书写放在中央，用 PencilKit 记录笔迹，以手势邀请回应，再让文字逐渐出现在页面上。离线模式使用模拟提示，选择远程服务时，提交的页面图像会发送给该服务。",
    ),
    result: pair(
      "The alpha includes an iPad demo and buildable source. The page lives in memory and disappears when the app closes, which limits its use as a diary.",
      "Alpha 包含 iPad 演示与可构建的源码。页面保存在内存中，关闭应用即会丢失，目前只适合交互实验。",
    ),
    links: [
      {
        name: pair("Alpha release and demo", "Alpha 记录与演示"),
        url: github + "Project_Diary/releases/tag/v0.1.0-alpha",
      },
      {
        name: pair("Privacy notes", "隐私说明"),
        url: github + "Project_Diary/blob/main/PRIVACY.md",
      },
    ],
  },
  {
    slug: "nera",
    name: "Nera",
    repo: "Project_Nera",
    platform: "Windows",
    discipline: pair("Display rendering", "显示渲染"),
    status: pair("Source preview", "源码预览"),
    license: "MIT (published control-plane source)",
    licenseZh: "MIT（已公开的控制层源码）",
    summary: pair(
      "An experiment in treating the whole display as one canvas.",
      "把整块显示屏作为一张画布的实验。",
    ),
    question: pair(
      "How might a rendering treatment follow a person across the desktop? Nera explores applying neural processing and HDR to a whole display.",
      "当使用者在桌面应用之间切换，渲染效果如何保持连贯？Nera 探索了为整块显示屏应用神经处理与 HDR 的方法。",
    ),
    design: pair(
      "The prototype organizes interaction around one global switch, with controls for visual strength and performance. A successful displayed frame gates activation, and recovery controls let the operator return to the original view.",
      "原型围绕一个全局开关组织交互，同时提供效果强度与性能控制。成功显示一帧后才能启动效果，恢复控制让使用者可以回到原始画面。",
    ),
    result: pair(
      "The public preview exposes the control plane for inspection and tests. The complete display-processing pipeline remains internal. The repository documents the interface and recovery behavior.",
      "公开预览提供可检查、可测试的控制层。完整的显示处理流程仍在内部，仓库记录了界面与恢复机制。",
    ),
    links: [
      {
        name: pair("Read the alpha record", "查看 Alpha 记录"),
        url: github + "Project_Nera/releases/tag/v0.5.0-alpha.2",
      },
    ],
  },
  {
    slug: "chips-agent-fabric",
    name: "CHIPS Agent Fabric",
    repo: "Project_Chips_Agent_Fabric",
    platform: "Supervisor · API / CLI",
    discipline: pair("Agent systems", "Agent 系统"),
    status: pair("Beta prerelease", "Beta 预发布"),
    license: "Apache-2.0",
    licenseZh: "Apache-2.0",
    summary: pair(
      "A shared task record for workers using different AI models.",
      "让使用不同 AI 模型的工作节点共享任务记录。",
    ),
    question: pair(
      "When several workers contribute to the same task, where does the record of their work live? Fabric explores local coordination across providers and machines.",
      "当多个工作节点参与同一任务，工作记录应该存在哪里？Fabric 探索跨服务商、跨设备的本地协作。",
    ),
    design: pair(
      "Supervisor keeps canonical task state, schedules work and records events. Provider adapters connect workers to the kernel. This gives a person reviewing a run a way to inspect its history across handoffs.",
      "Supervisor 保存任务的权威状态，调度工作并记录事件。服务商适配器把工作节点连接到内核，让审阅者能追溯不同节点交接任务的过程。",
    ),
    result: pair(
      "The v0.2 beta documents recovery and a versioned local worker protocol. Operators still supply provider executables and authentication.",
      "v0.2 Beta 记录了恢复流程以及带版本的本地工作节点协议。服务商的可执行程序与身份认证仍需由操作者提供。",
    ),
    links: [
      {
        name: pair("Read the beta release", "查看 Beta 记录"),
        url: github + "Project_Chips_Agent_Fabric/releases/tag/v0.2.0-beta.1",
      },
    ],
  },
  {
    slug: "health2you",
    name: "Health2You",
    repo: "Project_Health2You",
    platform: "iPhone · Apple Watch",
    discipline: pair("Health visualization", "健康可视化"),
    status: pair("Released", "已发布"),
    license: "Public documentation; production app source is private",
    licenseZh: "公开工程文档，生产应用源码私有",
    summary: pair(
      "Personal health trends, read on a phone or at a glance on the wrist.",
      "在手机上细读健康趋势，也能抬腕查看。",
    ),
    question: pair(
      "How can a health chart make a change over time legible on both a phone and a watch? The two screens call for different levels of detail.",
      "如何让健康图表在手机与手表上都能清楚呈现变化趋势？两种屏幕适合承载不同程度的细节。",
    ),
    design: pair(
      "Health2You brings the studio’s interest in adaptive layouts to personal health information. It processes raw health data on the device. The public project distinguishes the shipped app from the engineering and support material available to readers.",
      "Health2You 将工作室对自适应布局的关注带入个人健康信息的呈现。应用在设备上处理原始健康数据。公开项目分别说明已发布的应用，以及读者可查看的工程与支持资料。",
    ),
    result: pair(
      "Version 1.3.1 is listed in the US App Store. The project repository provides legal and support resources; it does not distribute the production application source.",
      "美国 App Store 已上架 1.3.1 版本。项目仓库提供法律与支持资料，生产应用源码保持私有。",
    ),
    links: [
      {
        name: pair("View on the US App Store", "前往美国 App Store"),
        url: "https://apps.apple.com/us/app/health2you/id6786253596",
      },
      {
        name: pair("Privacy policy", "隐私政策"),
        url: "https://ka1y0.github.io/Project_Health2You/privacy.html",
      },
      {
        name: pair("Support", "支持"),
        url: "https://ka1y0.github.io/Project_Health2You/support.html",
      },
    ],
  },
];
export function route(path = "", lang: Language = "en") {
  return (
    identity.base + (lang === "zh" ? "zh/" : "") + (path ? path + "/" : "")
  );
}
export const absolute = (path: string) => new URL(path, identity.origin).href;
export const pages = [
  "",
  "work",
  "research",
  "about",
  ...projects.map((p) => "work/" + p.slug),
];
export const inventory = projects.map((p) => ({
  ...p,
  source: github + p.repo,
  verified: identity.verified,
  canonical: absolute(route("work/" + p.slug)),
  zhCanonical: absolute(route("work/" + p.slug, "zh")),
}));
