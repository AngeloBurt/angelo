---
sidebar: true
---

## 一些他人的使用经验

[印象笔记]("https://app.yinxiang.com/shard/s63/nl/37485152/f19a9fe2-cbcf-41d9-8e60-fd0eb461bf8a?title=(1%E6%9D%A1%E6%B6%88%E6%81%AF)%20vuepress%E5%85%A5%E9%97%A8%E8%AF%A6%E8%A7%A3%EF%BC%88%E5%9B%9B%EF%BC%89vuepress%20%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE_%E7%89%9B%E9%AD%94%E7%8E%8Bsq%E7%9A%84%E5%8D%9A%E5%AE%A2-CSDN%E5%8D%9A%E5%AE%A2_vuepress%E9%85%8D%E7%BD%AE")

# 设置网站图标

```javascript
module.exports = {
  title: "title",
  description: "description",
  base: "/",
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      "link", { rel: "icon", href: "/image/favicon.ico" }
    ]
  ]
}

```
