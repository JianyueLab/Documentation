# Quick start

## Enviromental requirements

- Python3
- requests module
- python-dotenv module
- discord.py module
- MCSManager Panel version 10+

## Installation

### Dev Version

:::warning
The development version has more functions, but it may have issues during use. I do not recommend inexperienced users to use the development version.
:::

- Clone the main branch from [GitHub](https://github.com/JianyueLab/MCSM-Discord-Bot)
- Install all modules by use command lines.

```bash
pip3 install requests python-dotenv discord.py
```

## Adjust settings

1. Create a Bot at Discord Developer Portal
2. Open all privileges at `Privileged Gateway Intents` section on `BOT` page
3. At code folder, change `.env.sample` to `.env`
4. Regenerate `Token` on `bot` page
5. Copy the `Token` from step 4 to `TOKEN` at `.env`
6. Put you MCSManager panel website link into `URL` section.
7. Generate MCSManager apikey and input into `APIKEY` section

When you done all the steps above, type to start bot:

```bash
python3 bot.py
```

## Add Bot to Discord Server

1. At Discord Developer Portal and select your bot
2. Click OAuth2 on the sidebar
3. Find `OAuth2 URL Generator`, then check `bot`, and check `Administrator` at `General Permission` Section
4. Copy `Generated URL` and open in browser
5. Select a server and click ad
