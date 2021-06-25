---
title: Yubikey 5C NFC 介绍
date: 2021-06-25 23:31:44
tags:
---
# Yubikey 5C NFC 介绍

```bash
❯ sudo ykman info
Device type: YubiKey 5C NFC
Serial number: ******
Firmware version: ***
Form factor: Keychain (USB-C)
Enabled USB interfaces: OTP, FIDO, CCID
NFC transport is enabled.

Applications	USB          	NFC          
FIDO2       	Enabled      	Enabled      	
OTP         	Enabled      	Enabled      	
FIDO U2F    	Enabled      	Enabled      	
OATH        	Enabled      	Enabled      	
YubiHSM Auth	Not available	Not available	
OpenPGP     	Enabled      	Enabled      	
PIV         	Enabled      	Enabled
```

## FIDO2

又被称为 [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn)，是一种网络登录验证协议，如下图所示。用于进行登录的一次或二次验证。

![WebAuthn](https://cdn.jsdelivr.net/gh/Alice-space/alice-space.github.io@gh-pages/img/post/yubikey-intro/1.png)

## OTP

包含四种验证方式

- Yubico OTP: 使用Yubico提供的或自己托管的验证服务器进行验证，需要联网，可以用于登陆。
- Challenge - Response: HMAC-SHA1挑战响应，不需要联网，可以用于本地身份验证
- Static Password: 静态密码，固定的。
- OATH-HOTP: 基于次数的OTP协议，用于登录验证，不需要联网，但是容易失去同步。

## FIDO U2F

可以点击一下就进行通用双因素验证

![U2F for mobile](https://cdn.jsdelivr.net/gh/Alice-space/alice-space.github.io@gh-pages/img/post/yubikey-intro/2.png)

![U2F for USB](https://cdn.jsdelivr.net/gh/Alice-space/alice-space.github.io@gh-pages/img/post/yubikey-intro/3.png)

## OATH

- TOTP，yubikey里面自带的存储空间可以存下一些TOTP代码，用来进行OTP验证。在电脑和手机上下载yubico Authenticator 就能读取里面的内容。
- HOTP：跟上面的OATH-HOTP一样，通过键盘输出的。

## OpenPGP

使用 gpg 命令直接读取和操作，就可以了

```bash
❯ gpg --card-status
Reader ...........: Yubico YubiKey OTP FIDO CCID
Application ID ...: ***
Application type .: OpenPGP
Version ..........: 0.0
Manufacturer .....: Yubico
Serial number ....: ***
Name of cardholder: ***
Language prefs ...: zh
Salutation .......: 
URL of public key : ***
Login data .......: ***
Signature PIN ....: 非强制
Key attributes ...: ***
Max. PIN lengths .: ***
PIN retry counter : ***
Signature counter : ***
KDF setting ......: off
UIF setting ......: Sign=off Decrypt=off Auth=off
--------------------
省略详细信息
```

## PIV

标准的加密解密协议，使用智能卡来进行RSA和ECC加密、签名，受到操作系统的支持。