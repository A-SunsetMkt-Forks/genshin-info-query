# genshin-info-query

这是一个由 Svelte 和 Carbon UI 构建的界面  
配合后端<https://github.com/YieldRay/genshin-tool>食用  
默认后端服务器通过`./src/app-config.json`修改

## 本地构建

```
$ npm install
$ npm run build
```

## 部署到 Vercel

先部署 api，参见<https://github.com/YieldRay/genshin-tool>  
部署完成后得到 api 地址，通过修改[此文件](https://github.com/YieldRay/genshin-info-query/blob/master/src/app-config.json)来创建一个 fork，然后通过 vercel 导入你的 fork 即可

```json
{
    "server": "https://yuanshen.vercel.app/api"
}
```

修改为

```json
{
    "server": "https://你的api地址.vercel.app/api"
}
```
