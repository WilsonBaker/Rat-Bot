const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var stocks = require('./stocks.json');

// New client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When client ready, run code (only once though)
client.once('ready', () => {
    console.log("BRuh");
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'stock') {
        await interaction.deferReply();
        genStock = null
        genStock = await generateStock();
        await interaction.editReply('https://www.google.com/search?q=' + genStock + "+stock")
    } else if (commandName === 'crypto') {
        await interaction.deferReply();
		await interaction.reply('Crypto incoming...');
    }
});

// Login to Discord with client token
try{
    client.login(token);
} catch(err) {
    console.log(err);
}

async function generateStock() {
    let random = Math.floor(Math.random() * Math.floor(stocks.length));
    curStock = stocks[random];
    return curStock;
}

function generatecCrypto() {
    console.log("Crypto incoming...")
}
