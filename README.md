# interaction.js

## concept

- 屏幕尺寸：屏幕对角线的长度，单位通常为英寸（1inch = 2.54cm）
- 屏幕分辨率：横纵向上的物理像素点数，表示方式为纵向像素点数*横向像素点数，单位为px
- 屏幕像素密度：屏幕上每英寸显示的物理像素点数，单位为ppi
- 物理像素：屏幕可显示的最小粒度
- 逻辑像素：为web开发者创造的抽象单位，用于度量浏览器网页上内容的尺寸
- 设备独立像素：程序使用的虚拟像素
- 位图像素：栅格图像最小的数据单元
- 像素比：设备物理像素和设备独立像素的比例

> 无用户缩放情况下，对于普通屏，一个CSS像素对应一个物理像素；对于高倍屏，一个CSS像素对应n个物理像素

移动端视口:

- 布局视口
- 视觉视口
- 理想视口

```js
const dpr = window.devicePixelRatio

const browserWidth = window.outerWidth
const screenWidth = screen.width
const layoutWidth = document.documentElement.clientWidth
const visualWidth = window.innerWidth

const emoji = '\u{1F603}'

```

## gesture

- [ ] tap
- [ ] hold
- [ ] swipe
- [ ] rotate
- [ ] pinch
- [ ] finger

## voice

## face

## fingerprint

## deploy

```txt
location / {
  try_files $uri $uri/ /index.html;
}

location /dev/ {
  proxy_pass https://localhost:8080/;
}

```

[semver规范](https://nodejs.cn/npm/cli/v6/using-npm/semver)

```sh
npm config get registry
npm config list

npm link
npm rebuild
npm cache clean

npm login
npm publish
npm unpublish
npm deprecate

yarn upgrade
yarn install --force

```

## Git

```sh
git config --list [--local]

git log --pretty=oneline
git log --oneline
git log --graph
git reflog -n 
git log --oneline --graph

git reset --hard <hash>
git reset --sort <hash>
git reset --mixed <hash>

```

## ORM

```sh
sequelize init

pm2 init

```

## Swagger

[OpenAPI](https://swagger.io/specification/)

[Swagger Editor](https://editor-next.swagger.io/)

[Swagger UI](https://petstore.swagger.io/?_gl=1*1842hwd*_gcl_au*MTMzNjA0NDA4My4xNzE4NDQxMTc3&_ga=2.140595954.1979085870.1718441177-866837602.1718441177#/)
