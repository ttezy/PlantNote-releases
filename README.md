# 植记 · PlantNote 下载

每一棵植物，都被记得。

[植记官网与下载](https://ttezy.github.io/PlantNote-releases/) · [各平台安装指南](https://ttezy.github.io/PlantNote-releases/install.html) · [iOS / SideStore 指南](https://ttezy.github.io/PlantNote-releases/ios.html) · [历史版本](https://github.com/ttezy/PlantNote-releases/releases)

此仓库提供 PlantNote 安装包、图标和 SideStore 预览源。应用源码单独维护。

| 平台 | 下载文件 |
| --- | --- |
| iPhone / iPad | `PlantNote-<版本>-iOS.ipa`，由 SideStore 签名安装 |
| Android | `PlantNote-<版本>-Android-ARM64.apk`；另有 ARM32 / x64，目前使用开发签名 |
| Windows x64 | `PlantNote-<版本>-Windows-x64.zip`，完整解压后运行 |
| macOS | `PlantNote-<版本>-macOS-Universal.dmg`，支持 Intel 与 Apple 芯片，尚未进行发行签名与公证 |
| Linux x64 | `PlantNote-<版本>-Linux-x64.tar.gz` |
| Web | `PlantNote-<版本>-Web.zip`，部署到 HTTP(S) 服务器 |

新版公开安装包使用简洁名称，开发版的版本字段保留 `-dev.N`。历史版本继续使用原文件名与下载地址；构建编号、commit 和重试次数保留在内部构建产物中。

发布流程在上传前校验安装包完整性。GitHub 自动提供的 Source code 压缩包仅包含本仓库的分发说明和订阅文件。

固定的 SideStore 源地址：

```text
https://raw.githubusercontent.com/ttezy/PlantNote-releases/main/apps.json
```

此来源包含预览版。可离线在本机使用；邮箱登录后可自动同步账号资料与照片。本地库不会自动上传。SideStore 安装、签名续期和覆盖更新请以实际设备验证为准。

## 官网

本站使用 GitHub Pages，从 `main` 分支的根目录提供服务：

- `index.html`：应用介绍、当前版本及六个平台的安装包下载。
- `install.html`：各平台安装、更新与数据说明。
- `ios.html`：SideStore 首次安装、植记来源、IPA 安装、续签与排错。
- `site.css` / `site.js`：响应式样式和源地址复制；无前端依赖、无统计脚本。

下载链接直接指向对应版本的 Release 附件，不需要浏览器请求 GitHub API。后续应用发布会同步生成本站的版本号、实际架构、安装包链接。页面模板在应用维护仓库中统一维护，避免下次发布覆盖网站改动；公开仓库保留可直接托管的完整网页文件，不包含应用源码。
