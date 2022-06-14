## nvm安装Node

Node的版本切换使用的nvm
- nvm 安装node
```
nvm install 8.11.3
```

- nvm 切换node版本

```
nvm use 14.17.5
```


- 查看node版本
```
nvm list
```

## nvm 安装
[GitHub地址](https://github.com/coreybutler/nvm-windows/releases)


`nvm-setup.zipWin10 推荐：这是一个安装包，下载之后点击安装，无需配置就
可以使用，方便。`

说明:

• nvm-noinstall.zip： 这个是绿色免安装版本，但是使用之前需要配置

• nvm-setup.zipWin10 推荐：这是一个安装包，下载之后点击安装，无需配置就
可以使用，方便。

• Source code(zip)：zip压缩的源码

• Sourc code(tar.gz)：tar.gz的源码，一般用于*nix系统

## node 查看镜像源

`npm config get registry`

## node 设置TB镜像源

`npm config set registry https://registry.npmjs.org/`

  以及

  C:\Users\Administrator\AppData\Roaming\nvm(这里的位置是nvm的安装位置)的setting.txt文件中添加

  root: C:\Users\Administrator\AppData\Roaming\nvm

  path: C:\Program Files\nodejs

  // 添加下面的两行

  node_mirror: https://npm.taobao.org/mirrors/node/

  npm_mirror: https://npm.taobao.org/mirrors/npm/


## node 重置镜像源

`npm config set registry http://registry.npmjs.org`

## yarn 安装
`npm install -g yarn`

## yarn 查看镜像源
`yarn config get registry`

## yarn 设置镜像源
```
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

## yarn 重置镜像源
`yarn config set registry https://registry.yarnpkg.com`


[VuePress野生使用文档](https://app.yinxiang.com/shard/s63/nl/37485152/f19a9fe2-cbcf-41d9-8e60-fd0eb461bf8a)