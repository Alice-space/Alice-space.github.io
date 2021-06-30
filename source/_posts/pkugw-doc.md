---
title: 北大网关客户端文档
date: 2021-06-30 14:04:34
tags:
---

对`Linux`客户端进行抓包之后解析API，方便起见，我们只解析连接和断开的过程

# 连接网关

## Request

请求头

- URL Base: `https://its.pku.edu.cn`
- POST `/cas/ITSClient HTTP/1.1`
- Host: `its.pku.edu.cn`
- Content-Type: `application/x-www-form-urlencoded`
- Accept: `*/*`
- User-Agent: `IPGWLinux1.1_Linux`

请求体(注意是字符串)

- `app`: `IPGWLinux1.1`
- `cmd`: `open`
- `ip`: 空
- `iprange`: `fee`
- `lang`: `en`
- `password`: 密码
- `username`: 学号

## Response 

响应头

- `Contect-Type`: `text/html;charset=utf-8` 但是实际上是 JSON。

响应体: 

```json
{
    "succ": "",
    "ver": "1.1",
    "FIXRATE": "YES",
    "FR_TYPE": "",
    "FR_DESC_CN": "不限时间",
    "FR_DESC_EN": "unlimited",
    "SCOPE": "international",
    "DEFICIT": "",
    "FR_TIME_CN": "",
    "FR_TIME_EN": "Unlimited",
    "CONNECTIONS": "4",
    "BALANCE_CN": "90.0",
    "BALANCE_EN": "90.0",
    "IP": "x.x.x.x"
}
```

# 断开连接


## Request

请求头
- URL Base: `https://its.pku.edu.cn`
- POST `/cas/ITSClient HTTP/1.1`
- Host: `its.pku.edu.cn`
- Content-Type: `application/x-www-form-urlencoded`
- Accept: `*/*`
- User-Agent: `IPGWLinux1.1_Linux`

请求体(注意是字符串)

- `cmd`: `close`
- `lang`: `en`

## Response 

响应头

- `Contect-Type`: `text/html;charset=utf-8` 但是实际上是 JSON。

响应体: 

```json
{
    "succ": "close_OK"
}
```

# 结论

这个谜一样的API系统不知道是谁设计的，无语...