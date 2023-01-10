const { Configuration, OpenAIApi } = require("openai");
const { Client } = require('discord.js');
const config = require('./config.json')
const TOKEN = config.TOKEN;
const OPENAI_API_KEY = config.OPENAI_API_KEY;
const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ]
});

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (!message.author.bot && message.mentions.has(client.user.id)) {
        message.channel.sendTyping();
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message.content,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        });
        message.reply(response.data.choices[0].text);
    }
});

client.login(TOKEN);