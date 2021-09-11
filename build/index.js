"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('dotenv').config();
const client = new discord_js_1.Client({ intents: 'GUILDS' });
client.on('message', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === 'おはよう') {
        message.channel.send('おっはー');
    }
});
client.login(process.env.DISCORD_TOKEN);
