const { Client, Intents } = require('discord.js');
//const { token } = require('./config.json');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var stocks = require('./stocks.json');
const { exec } = require('child_process');

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
		await interaction.editReply('Crypto incoming...');
    } else if (commandName === 'updatestocks') {
        await interaction.deferReply();
        await updateStocks()
		await interaction.editReply('Successfully updated stock list');
    }
});

// Login to Discord with client token
try{
    client.login(process.env.DJS_TOKEN);
} catch(err) {
    console.log(err);
}

async function generateStock() {
    let random = Math.floor(Math.random() * Math.floor(stocks.length));
    curStock = stocks[random];
    return curStock;
}

async function updateStocks() {
    var yourscript = exec('sh grabStocks.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
}

function generatecCrypto() {
    console.log("Crypto incoming...")
}
