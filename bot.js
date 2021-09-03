console.log("hello world");
const Discord = require('discord.js');
const { token } = require('./config.json')

const client = new Discord.Client();
client.login(token);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("BRuh");
}