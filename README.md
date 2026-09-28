# 植记 · PlantNote 下载

每一棵植物，都被记得。

[在 iPhone 上通过 SideStore 安装](https://ttezy.github.io/PlantNote-releases/) · [全部版本与各平台下载](https://github.com/ttezy/PlantNote-releases/releases)

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
