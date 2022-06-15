
## shell文件使用总结

::: tip

bash 删除文件夹

:::

``rm -rf dist``

::: warning
1. 直接在浏览器上复制的脚本文件,粘贴到编辑器上会有nbsp字符的提示记得替换为''
2. 使用使用git bash 提交代码时,最好使用密钥提交, 之前用用户名和密码一直提交不成功, 不是超时就是10054
:::


## 创建根目录下脚本文件

可以使用 touch deploy.sh

也可以使用编辑新建deploy.sh 文件

粘贴以下代码(网上找的脚本=_=!)

```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
yarn docs:build

# 进入生成的文件夹，这里是默认的路径，可以自定义
cd ./docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.isunbeam.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:<BranchName>
#git push -f git@github.com:u65b96/ange.git
git push -f git@github.com:u65b96/angelo.git master:ange

# 删除dist(选用)
# cd ../
# rm -rf dist
```

## 根目录下执行脚本

``bash deploy.sh``

出现以下提示说明脚本执行成功

![img.png](/img.png)

tips: 这里的截图粘贴会在上传当前目录下,记得挪到public文件夹下


## github 部署使用总结

新建分支存储打包后的文件
