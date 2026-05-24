<div align="center">
<img width="1200" height="475" alt="Zenith Start Page" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
<h3>一款简洁、可定制的浏览器起始页 —— 属于你的新标签页个人仪表盘。</h3>
<p>A clean, customizable browser start page — your personal dashboard for every new tab.</p>
</div>

---

## Zenith Start Page · 天顶起始页

将浏览器默认的新标签页替换为一个极简且功能丰富的首页。一个单屏仪表盘，集搜索、时间、天气和每日精美壁纸于一体，为速度和简洁而生。

Replace your browser's default new tab with a minimalist, feature-rich homepage. A single-screen dashboard that brings together search, time, weather, and stunning daily wallpapers — built for speed and simplicity.

### 功能特性 · Features

- **多引擎搜索栏** — 在 Google、Bing 之间一键切换，也可添加自定义搜索引擎。实时搜索建议，支持键盘导航和 ARIA 无障碍访问。
- **实时时钟与日期** — 标签页隐藏时自动暂停时钟以节省 CPU，切回时立即恢复。
- **Bing 每日壁纸** — 每次加载自动获取 Bing 当日精选图片。支持实时预览的可调节背景模糊。
- **本地天气小组件** — 基于 [wttr.in](https://wttr.in)，支持地理定位，配备完整的天气状况图标集。
- **深色 / 浅色主题** — 手动切换，自动检测系统偏好，设置跨会话持久保存。
- **自定义搜索引擎管理** — 自由添加、删除、排序你常用的搜索服务。模板支持 `%s` 占位符注入查询关键词。
- **离线可用** — Service Worker 智能缓存策略确保无网络也能加载页面。新内容发布后自动更新缓存。
- **本地上传壁纸** — 拖拽或选择自己的图片；带容量限制保护 localStorage 配额。
- **搜索历史** — 本地保存近期查询记录，一键清除，条目数量有上限防止存储膨胀。

### 技术栈 · Tech Stack

| 层面 | 选型 |
|---|---|
| 构建工具 | [Vite 6](https://vite.dev) |
| 样式方案 | [Tailwind CSS v4](https://tailwindcss.com) |
| 运行时 | 原生 JavaScript（零框架开销） |
| 离线支持 | Service Worker API |
| 天气数据 | [wttr.in](https://wttr.in) |
| 壁纸来源 | Bing HPImageArchive（开发模式走 Vite 代理，生产模式用公共 API） |

### 快速开始 · Getting Started

**环境要求：** Node.js 18+

```bash
# 1. 安装依赖
npm install

# 2. （可选）设置 Gemini API Key，用于 AI 相关功能
cp .env.local.example .env.local
# 编辑 .env.local 填入你的 Key

# 3. 启动开发服务器
npm run dev
```

打开 `http://localhost:3000` —— 这就是你的新起始页。

### 生产构建 · Production Build

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览生产版本
```

`dist/` 目录是纯静态站点 —— 可部署到任何平台：GitHub Pages、Netlify、Vercel 或你自己的服务器。

### 设为浏览器起始页 · Browser Setup

- **Chrome / Edge** — 安装 [New Tab Redirect](https://chromewebstore.google.com/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) 扩展，将新标签页指向你部署后的 URL。
- **Firefox** — 原生不支持自定义新标签页 URL，可将其设为浏览器主页。

### 项目结构 · Project Structure

```
├── index.html          # 入口页面
├── index.js            # 全部应用逻辑
├── sw.js               # Service Worker
├── vite.config.ts      # Vite 配置（含开发代理）
├── src/
│   └── style.css       # Tailwind 导入 + 自定义变体
└── dist/               # 生产构建输出（已 gitignore）
```

### 致谢 · Credits

本项目由 [seegud](https://github.com/seegud) 创建，后期修改与优化由 **DeepSeek v4 Pro** 辅助完成。

### 许可 · License

MIT