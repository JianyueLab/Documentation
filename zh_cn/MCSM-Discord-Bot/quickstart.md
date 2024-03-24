# 快速开始

## 环境要求

- Python3
- requests 模块
- python-dotenv 模块
- discord.py 模块
- MCSManager 面板 版本 10+

## 安装

### 开发版本

:::warning
开发版本具有更多的功能，但是会有很多 bug 且不稳定
:::

- 在 [GitHub](https://github.com/JianyueLab/MCSM-Discord-Bot) 克隆 main 分支
- 安装 python3 模块：

```bash
pip3 install requests python-dotenv discord.py
```

## 配置机器人

1. 在 [Discord 开发者面板](https://discord.com/developers/) 中，创建一个新的机器人
2. 在 `BOT` 页面打开所有在 `Privileged Gateway Intents` 的功能
3. 将 `.env.sample` 文件重命名为 `.env`
4. 在开发者面板重新生成 Bot 的 Token
5. 复制 Token 并将其填入 `.env` 文件中的 TOKEN
6. 在 `URL` 部分，输入 MCSManager 面板的地址（域名或者 IP 地址）
7. 生成 MCSManager 的 APIKEY 并填入 `APIKEY` 部分

当你配置好了机器人后，可以通过以下命令启动机器人

```bash
python3 bot.py
```

## 添加机器人到服务器

1. 在开发者面板中选择 OAuth2 页面
2. 在 `OAuth2 URL Generation` 部分，勾选 BOT 和 Administrator
3. 复制生成的 URL 并在浏览器打开
4. 选择需要加入的服务器并添加
