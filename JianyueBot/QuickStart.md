# QuickStart

## Enviromental Requirments

- Python3
- requests module

## Installation

### Release Version

- [Download release from GitHub](https://github.com/JianyueLab/JianyueBOT/releases/tag/release)

The released version is stable with almost no bugs, but it has fewer features than the development version.

### Dev Version

- Clone the main branch from [GitHub](https://github.com/JianyueLab/JianyueBOT)

:::warning
The development version has more functions, but it may have issues during use. I do not recommend inexperienced users to use the development version.
:::

## Adjust Settings

1. Create a Bot at Discord Developer Portal
2. Open all privileges at `Privileged Gateway Intents` section on `BOT` page
3. At code folder, change `sample.settings.py` to `settings.py`
4. Regenerate `Token` on `bot` page
5. Copy the `Token` from step 4 to `TOKEN` at `settings.py`

When you done all the steps above, type to start bot:

```bash
python3 bot.py
```

## Add Bot to Discord Server

1. At Discord Developer Portal and select your bot
2. Click OAuth2 on the sidebar
3. Find `OAuth2 URL Generator`, then check `bot`, and check `Administrator` at `General Permission` Section
4. Copy `Generated URL` and open in browser
5. Select a server and click add
