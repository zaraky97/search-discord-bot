import { Client } from 'discord.js';
require('dotenv').config();

const client = new Client({ intents: 'GUILDS' });

client.on('message', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === 'おはよう') {
    message.channel.send('おっはー');
  }
});
client.login(process.env.DISCORD_TOKEN);
