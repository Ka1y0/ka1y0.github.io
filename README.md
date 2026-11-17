# Kaiyo

Kaiyo 的中英文作品集，展示艺术、软件和人机协作实践。英文位于根目录，简体中文位于 `/zh/`。两个语言版本均在构建时生成完整 HTML；阅读与导航无需 JavaScript。

## 本地运行与构建

使用 `.nvmrc` 中的 Node.js 版本。以下命令在仓库根目录执行。

```sh
nvm install
nvm use
npm ci
npm run check
npm run dev
```

开发服务的地址见终端输出。运行 `npm run build` 生成 `dist/`，再用 `npm run preview` 检查生产版本。最终部署只需要 `dist/` 的内容。

## 添加作品与编辑双语内容

1. 在 `src/data/projects.ts` 的 `projects` 数组中添加记录。保留正式名称、稳定的 ASCII slug、平台、发布状态、公开源码范围、许可证和核实链接，并为每段文本填写英文及简体中文。公开演示、预发布版本、部分源码预览与正式发布各自记录。
2. 更新项目时核查当前 README、release、实际可访问入口和素材权利。更新 `site.config.mjs` 的 `verified` 日期前，重新核对整个清单。个人站选集和工作室产品目录独立维护，修改重叠条目时对照两边记录。
3. 详情页、作品列表、`projects.json`、`AI_CONTEXT.md` 与 sitemap 会随清单重新生成。首页的版式以 Pixel Harbor 为首篇大图案例，其余作品以编辑索引呈现。更换首篇时一起调整 `src/pages/[...page].astro` 中的大图、替代文字及目的地址。
4. 在 `src/data/copy.ts` 编辑首页、研究问题、个人简介、导航和交互标签。研究区整理实践问题，正式发表记录需另行核实后添加。
5. 图片放入 `public/media/`。使用发布授权明确的文件，压缩为 WebP，在对应图像组件填写尺寸与中英文替代文字，并更新下方素材记录。首页正文依靠 HTML 与 CSS 渲染。

## 部署与回退

GitHub Pages 的 Source 选择 **GitHub Actions**。`.github/workflows/` 中的流程对 PR 运行检查；合并到 main 后构建并部署。手工发布可在 Actions 选择对应 workflow，再选择 **Run workflow** 和 main。等待 Pages 环境中的部署完成，访问部署给出的地址，再直接打开一个英文详情页和对应中文详情页。

回退使用 `git revert <引入问题的提交>`，检查通过后推送至 main。正常部署流程将发布回退后的版本并保留历史。若一次改动合并为 merge commit，确认父提交后使用相应的 revert 主线参数。

站点域名、根路径、工作室入口、核验日期集中在 `site.config.mjs`。迁移域名时同时更新工作室站的对应配置、验证双方互链及 sitemap。根目录 `robots.txt` 允许访问同域的其他项目站并列出两站 sitemap。自定义域名和 DNS 由所有者另行配置。

## 首版公开内容清单（2026-11-17）

|作品|可核实成果|公开范围及事实来源|
|---|---|---|
|Pixel Harbor|Three.js 在线参考世界；六种画风共享场景|Agentic_Graphics 的公开代码与文档适用 MIT。[案例](https://github.com/Ka1y0/Tool_Agentic_Graphics/blob/main/docs/showcases/pixel-harbor.md) · [演示](https://ka1y0.github.io/Tool_Agentic_Graphics/pixel-harbor/)|
|Project Diary|iPad 与 Apple Pencil 交互实验，v0.1.0-alpha|原始源码 MIT，随附字体 OFL。[项目及隐私说明](https://github.com/Ka1y0/Project_Diary) · [Alpha](https://github.com/Ka1y0/Project_Diary/releases/tag/v0.1.0-alpha)|
|Nera|Windows 显示处理实验的控制层源码预览|发布的控制层 MIT，完整应用仍在内部。[说明](https://github.com/Ka1y0/Project_Nera) · [Alpha](https://github.com/Ka1y0/Project_Nera/releases/tag/v0.5.0-alpha.2)|
|CHIPS Agent Fabric|本地优先的多 agent 内核，v0.2.0-beta.1|Apache-2.0。[项目](https://github.com/Ka1y0/Project_Chips_Agent_Fabric) · [Beta](https://github.com/Ka1y0/Project_Chips_Agent_Fabric/releases/tag/v0.2.0-beta.1)|
|Health2You|iPhone 与 Apple Watch 健康应用，美国 App Store v1.3.1|公开工程和支持文档，生产源码私有。[美国 App Store](https://apps.apple.com/us/app/health2you/id6786253596) · [支持](https://ka1y0.github.io/Project_Health2You/support.html)|

Kaiyo 的公开称呼、研究背景、Chips Studio 的创作分工来自本次所有者提供的公开建站资料。首版不列未经核实的院校、学位、论文或社交联系方式。

## 素材与权利

- **Continuous form** 是为本网站制作的原创程序化结形插画。页面以“程序化习作”说明其性质。
- Pixel Harbor 图片取自 [Agentic_Graphics 官方文档配图](https://github.com/Ka1y0/Tool_Agentic_Graphics/blob/main/docs/assets/pixel-harbor/hero-2d.png)，仅调整压缩格式。保留的版权与许可证见 [Agentic_Graphics_LICENSE.txt](public/media/Agentic_Graphics_LICENSE.txt)。
- 字体使用本机可用的衬线、无衬线与等宽字体。实际产品、第三方组件及非公开部分各有其权利范围；作品清单中的授权只适用于对应来源标明的部分。
