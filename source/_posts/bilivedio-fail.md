---
title: 北大校园网加载不出来B站资源始末
date: 2021-06-24 10:52:19
---

用手机上的`Quantumult X`抓包试了一下，结果如下：

## `DNS`解析

B站自建了`DNS`进行解析，我们抓包处理
   
```plaintext
http://203.107.1.33/191607/resolve?host=upos-sz-mirrorks3.bilivideo.com&query=4,6
```
得到 

```json
{
 "dns": [
        {
            "host": "upos-sz-mirrorks3.bilivideo.com",
            "client_ip": "124.205.77.119",
            "ips": [
                "2409:8c14:e07:9402:0:0:0:6",
                "2408:874f:b000:5:0:0:0:6"
            ],
            "type": 28,
            "ttl": 59,
            "origin_ttl": 99
        },
        {
            "host": "upos-sz-mirrorks3.bilivideo.com",
            "client_ip": "124.205.77.119",
            "ips": [
                "124.205.208.7",
                "124.205.208.8",
                "124.205.208.6"
            ],
            "type": 1,
            "ttl": 59,
            "origin_ttl": 99
        }
    ]
}
```

## 进行`traceroute`
   
   ```bash
   sudo mtr 124.205.208.6 -I en0
   ```

   ![追踪结果](https://cdn.jsdelivr.net/gh/Alice-space/alice-space.github.io@gh-pages/img/post/bilivedio-fail/bilivedio-fail.png)

   其中`219.158.3.65`是北京联通的 IP ，可能是汇聚层的设备，居然丢包率高达50%！不知道是策略还是故障。

## 结论

从抓包结果来看，显示响应为空。资源加载不出来应该不是校园网的锅。有可能是联通，大概率可能b站的CDN炸了。