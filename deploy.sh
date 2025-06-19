# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Dai51d/wenyiLove.git
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git checkout -b gh-pages
git push -f https://github.com/Dai51d/wenyiLove.git master:gh-pages

git checkout -b bj-pages
git push -f https://github.com/Dai51d/wenyiLove.git master:bj-pages

cd -
