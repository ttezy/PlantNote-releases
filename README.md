# 植记 · PlantNote 下载

每一棵植物，都被记得。

[植记官网与下载](https://ttezy.github.io/PlantNote-releases/) · [各平台安装指南](https://ttezy.github.io/PlantNote-releases/install.html) · [iOS / SideStore 指南](https://ttezy.github.io/PlantNote-releases/ios.html) · [历史版本](https://github.com/ttezy/PlantNote-releases/releases)

此仓库提供 PlantNote 安装包、SHA-256 校验文件、图标和 SideStore 预览源。应用源码单独维护。

| 平台 | 下载文件 |
| --- | --- |
| iPhone / iPad | `*-ios-arm64-unsigned.ipa`，由 SideStore 签名安装 |
| Android | 对应设备架构的 `*.apk`，目前使用开发签名 |
| Windows x64 | `*-windows-x64-portable.zip`，完整解压后运行 |
| macOS | `*-macos-*-unsigned.dmg`，尚未进行发行签名与公证 |
| Linux x64 | `*-linux-x64-portable.tar.gz` |
| Web | `*-web.zip`，部署到 HTTP(S) 服务器 |

每个平台附有 `*-SHA256SUMS.txt`，用于校验下载完整性。GitHub 自动提供的 Source code 压缩包仅包含本仓库的分发说明和订阅文件。

固定的 SideStore 源地址：

```text
https://raw.githubusercontent.com/ttezy/PlantNote-releases/main/apps.json
```

此来源包含预览版。植物资料与照片保存在设备本机，暂不支持云同步。SideStore 安装、签名续期和覆盖更新请以实际设备验证为准。

## 官网

本站使用 GitHub Pages，从 `main` 分支的根目录提供服务：

- `index.html`：应用介绍、当前版本及六个平台的安装包下载。
- `install.html`：各平台安装、SHA-256 校验、更新与数据说明。
- `ios.html`：SideStore 首次安装、植记来源、IPA 安装、续签与排错。
- `site.css` / `site.js`：响应式样式和源地址复制；无前端依赖、无统计脚本。

下载链接直接指向对应版本的 Release 附件，不需要浏览器请求 GitHub API。后续应用发布会同步生成本站的版本号、实际架构、安装包与校验文件链接。页面模板在应用维护仓库中统一维护，避免下次发布覆盖网站改动；公开仓库保留可直接托管的完整网页文件，不包含应用源码。
