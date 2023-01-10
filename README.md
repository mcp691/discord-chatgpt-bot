# Discord ChatGPT Bot
A simple Discord chat bot using the OpenAI ChatGPT API.

# Setup
Create a `config.json` file containing the unique token and API key for your <a href="https://discord.com/developers/docs/getting-started">Discord</a> bot and <a href="https://beta.openai.com/account/api-keys">OpenAI</a> accounts respectively.

Make sure the Node Package Manager `npm` is installed on your system with the command `npm -v`. If not, install it <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">here</a>

Nodemon is recommended but not required. Install it with `npm i nodmemon`. Install Discord to your project with `npm i discord.js`. Next, install OpenAI to the project with `npm i openai`.

## Setting up Discord

1. Create a new app in the Discord Developer Portal applications tab. Within the app, create a new bot and select an appropriate username. The bot's username prefixed with an '@' will be used to address the bot in order to chat and give commands, so make sure you make it fairly easy to type.

2. Under the OAuth2 tab in the Setting menu, select URL Generator.

3. Select the scopes and permissions that you want the bot to have. For scopes, we select 'bot' and permissons can be anything of your choice. I recommend selecting 'Administrator' because it's easier.

4. Create a new server in Discord for your bot to live.

5. Copy and paste the generated URL into your web browser and, when prompted, select the Discord server that you created in the previous step.

The bot should now be in the Discord server.

# Usage

In the project directory, run `node ./main.js` to start the local node server. The terminal should read something like `logged in as Bot-name#1234` with your bots username and string of digits.

Simply tag the bot in Discord (using @bot-name) order to address it. The bot will not respond unless tagged. Ask it any question you'd like or just have a conversation with it!