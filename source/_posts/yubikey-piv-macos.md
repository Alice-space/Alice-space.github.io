---
title: 使用Yubikey PIV进行macOS认证
date: 2021-06-28 22:57:39
tags:
---

# 步骤

1. 生成密钥和证书
    1. 生成密钥

    ```bash
    ykman piv generate-key 9a --algorithm ECCP256 /tmp/9a.pub
    ykman piv generate-key 9d --algorithm ECCP256 /tmp/9d.pub
    ```

    ```c
    int main()
    {
        return 0;
    }
    ```
    2. 生成证书，其中subject可以改名字

    ```bash
    ykman piv generate-certificate 9a --subject "YubiKey 5" /tmp/9a.pub
    ykman piv generate-certificate 9d --subject "YubiKey 5" /tmp/9d.pub
    ```

    把YubiKey插拔一下就可以了，然后根据弹出的窗口进行配对。`sudo` 命令也会自动配置

    ![yubikey-macos-sudo](https://cdn.jsdelivr.net/gh/Alice-space/alice-space.github.io@gh-pages/img/post/yubikey-piv-macos/yubikey-macos-sudo.png)