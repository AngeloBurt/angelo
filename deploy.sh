#!/usr/bin/env sh

# echo '666...'
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# yarn build
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
# git push -f git@github.com:isunbeam/Blogs.git master:blogs
#git push -f https://u65b96.github.io/ange

#git push -f git@github.com:u65b96/ange.git
git push -f git@github.com:u65b96/angelo.git master:ange
#git@github.com:u65b96/ange.git

cd ../
ls
rm -rf dist

cd -

# 最后发布的时候执行 bash deploy.sh
