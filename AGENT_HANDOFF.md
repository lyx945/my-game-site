# AGENT 交接说明（云电脑 / 新会话必读）

> 给接手这个项目的 AI 助手：读完这份再动手，能省掉大量试错。
> 最后更新：2026-11-28 · 站点版本 `2026.11.28.1`

## 1. 项目是什么

`303329.xyz` —— LYX STUDIO 个人站，包含作品集主页、悄悄话聊天、直播、两个小游戏、运营成本 3D 页、404 小恐龙。

- 仓库：`lyx945/my-game-site`，分支 `main`，根目录即站点根
- 部署：Vercel（GitHub 推送后自动构建）+ Cloudflare DNS
- 数据库/存储：Supabase 项目 `znqiksqldqthcnlbrwzi`（publishable key 写在各 HTML 顶部，本来就是公开的）

## 2. 技术栈（重要：不要套通用模板）

**纯原生 JS 单文件页面，没有框架、没有构建、没有路由库、没有状态管理库。**

- 每个页面是一个独立 HTML，内联 `<style>` 与 `<script>`
- 页面内用模块级全局变量做状态（如 `state`、`currentPeer`、`view`）
- 请求全部走 `fetch`（含 supabase-js 内部），没有统一请求封装
- "路由"是多页跳转 + 页内视图切换（`switchView` / `setTab` / `show`）
- 样式用 CSS 变量 + `oklch`，各页主题不同（主页暗金、聊天浅紫、直播黑金）

## 3. 文件地图

| 文件 | 线上路径 | 作用 |
|---|---|---|
| `newindex.html` | `/index.html` | 主页（**部署时必须重命名为 index.html**） |
| `chat.html` | `/chat.html` | 悄悄话：私聊/群聊/大厅/文件/语音/AI |
| `live.html` | `/live.html` | 直播：WebRTC + 弹幕 + 回放 + 中转额度 |
| `12wz6.html` | `/12wz6.html` | 生物之王（合成大西瓜 + 答题 + 云端榜） |
| `admin.html` | `/admin.html` | 管理后台：账号/群/直播审批与封禁 |
| `coin.html` | `/coin.html` | 运营成本 3D 硬币（three + cannon-es） |
| `404.html` | `/404.html` | 小恐龙跑酷 + 反馈复制邮箱 |
| `assets/qh-log.js` | 同左 | **全站诊断日志**，所有页面 head 最前引入 |
| `coins/`、`duofangge/`、`xingjie/` | 同左 | 旧版硬币页、两个打包小游戏 |

`assets/` 放公共资源（字体、model-viewer、supabase UMD、模型、图片）。

## 4. 硬性约定（用户明确要求，违反会被批评）

1. **信息不全就停下来问**，不要猜、不要为了推进硬做。
2. **要用户执行操作前，先自查自己能不能做**（例如 Supabase 有 MCP 可直接跑 SQL，就不要让用户手动执行）。
3. 每个新建表 SQL 必须带 anon 的 `delete` 策略，方便清理测试数据。
4. 静态资源优先放 GitHub，Supabase Storage 只用于用户运行时上传的文件。
5. 部署：优先 GitHub 连接器；返回 403 时用 Git Data API（GET ref → blobs → tree → commit → PATCH ref）。
   **PAT 不写进任何仓库文件，只放环境变量或当次对话。**
6. 涉及线上问题，先看「诊断日志」而不是猜。

## 5. 诊断日志系统（2026-11-28 上线）

- `assets/qh-log.js`，head 最前同步引入，带 `data-page` / `data-ver`
- 每条页面紧跟 `<script>window.qhAct=window.qhAct||function(){};</script>` 兜底
- 采集：JS 错误、未捕获 Promise、资源加载失败、**全量 fetch**（含 SDK 内部）、业务动作、页面生命周期
- 环缓冲 500 条 / 256KB，localStorage 节流落盘，失败降级内存
- 脱敏：用户 ID 前 4 后 2、邮箱、手机号、apikey、JWT
- 导出：右下角 10px「诊断」小字；微信等环境自动弹全文 + 复制
- 业务打点统一 `qhAct('event', {data})`
- **排障第一步**：让用户点「诊断」把 txt 发来，里面有环境头 + 完整链路

## 6. 已知待办

- Cloudflare TURN 的 Key ID / API Token 尚未写入 Supabase `app_config`，写入后直播才真正走中转（当前用公共中继，不稳定）
- 直播双端真机验证：声音、弹幕浮窗、录制回放、停止共享不结束直播
- 主页数据看板的周快照依赖定时写入，可考虑迁到 GitHub Actions

## 7. 踩过的坑（别重复）

- `chrome.kill()` 只杀主进程，headless Chrome 的子进程会成为孤儿，曾累积 152 个进程 / 7.4GB。
  正确做法：独立 `--user-data-dir` + `taskkill /T /F /PID <主进程>`，收尾数一次进程数确认归零。
- Chrome 158 的 `--dump-dom` 在本机无输出，验证页面请用 CDP（`Page.navigate` + `Runtime.evaluate`）。
- Git Bash 会把 `/chat.html` 这类参数转换成 Windows 路径，需要 `MSYS_NO_PATHCONV=1`。
- Supabase count 查询在浏览器 CORS 下读不到 `Content-Range`，要用 `select=id&limit=1` + `Prefer: count=exact`。
- 聊天页 `joinRoom` 的订阅回调可能永不触发，已有 1.5s 超时兜底，改动时别删。

## 8. 云电脑环境注意

- 云端沙箱**看不到本机文件**，本项目的 `tmp/`、`.workbuddy/memory/` 不在仓库里。
- 需要项目上下文时，只依赖仓库内文件；缺什么就向用户要，不要臆测。
- 部署凭据（GitHub PAT、Supabase service key）不在仓库，需要时向用户索取，用完不要落盘。
