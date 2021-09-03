const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// New client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When client ready, run code (only once though)
client.once('ready', () => {
    console.log("BRuh");
});

// Login to Discord with client token
try{
    client.login(token);
} catch(err) {
    console.log(err);
}
