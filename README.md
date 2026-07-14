# 合成大西瓜

一款有趣的休闲小游戏，通过合成相同水果来获得更大的水果，目标是合成出大西瓜！

![游戏截图](1611557925872957.gif)

## 特性

- 🎮 经典合成玩法，简单易上手
- 📱 支持移动端和桌面端
- 🚫 **已去除所有广告**：包括 Google AdSense、Google IMA SDK、游戏内广告按钮
- 📦 支持 Docker 容器化部署
- ☁️ 支持 Cloudflare Pages 静态部署

## 技术栈

- **游戏引擎**: Cocos2d-js
- **前端框架**: 原生 HTML5 + JavaScript
- **容器化**: Docker + Nginx

## 项目结构

```
bigwatermelon-1.0/
├── index.html          # 主页面入口
├── main.js             # Cocos2d 引擎启动脚本
├── ads.js              # 广告逻辑（已Stub化）
├── style-mobile.css    # 移动端样式
├── cocos2d-js-min.js   # Cocos2d 引擎核心
├── res/                # 游戏资源（图片、音频等）
├── src/                # 游戏源代码
│   ├── project.js      # 游戏核心逻辑
│   └── settings.js     # 引擎配置
└── Dockerfile          # Docker 构建配置
```

## 本地运行

### 方式一：直接打开

使用浏览器直接打开 `index.html` 即可运行游戏。

### 方式二：Docker 部署

```bash
# 构建镜像
docker build -t bigwatermelon .

# 启动容器
docker run -d -p 8888:80 --name bigwatermelon-container bigwatermelon
```

访问 `http://localhost:8888` 即可开始游戏。

## Cloudflare Pages 部署

该项目是纯前端项目，可直接部署到 Cloudflare Pages：

1. 将项目推送到 GitHub/GitLab 仓库
2. 登录 Cloudflare Dashboard，进入 Pages
3. 连接仓库，选择主分支
4. 配置构建设置：
   - **Build command**: 留空（纯静态无需构建）
   - **Build output directory**: `.`
5. 点击部署，等待完成

## 修改记录

### 去除广告

- 移除 `index.html` 中的 Google AdSense、Google IMA SDK、第三方广告检测脚本
- 移除 `adContainer` 广告容器和广告视频元素
- 重构 `ads.js`，保留游戏流程所需的函数签名，移除实际广告请求逻辑
- 隐藏游戏内广告按钮 `adsButton` 和 `adsButton2`

## 游戏玩法

1. 点击屏幕任意位置释放水果
2. 相同水果碰撞会合成更大的水果
3. 从小葡萄开始，依次合成到西瓜
4. 水果堆积超过顶部则游戏结束

## License

MIT