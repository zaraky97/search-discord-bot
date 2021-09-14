"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('dotenv').config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
client.on('ready', () => {
    console.log(`${client.user?.tag} でログインしています。`);
});
client.on('message', (msg) => {
    if (msg.content === 'Hello')
        msg.reply('Hi');
    if (msg.content === 'こんにちは') {
        msg.channel.send('オイッスー！');
    }
});
client.login(process.env.DISCORD_TOKEN);
