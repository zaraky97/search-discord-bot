import { Client } from 'discord.js';
require('dotenv').config();

const client = new Client({ intents: 0 });

client.on('ready', () => {
  console.log(`${client.user?.tag} でログインしています。`);
});

client.on('message', (msg) => {
  if (msg.content === 'Hello') msg.reply('Hi');
});
client.login(process.env.DISCORD_TOKEN);
