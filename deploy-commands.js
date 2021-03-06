const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
//const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('stock').setDescription('Reccomends a random stock to the user'),
    new SlashCommandBuilder().setName('crypto').setDescription('Reccomends a random cypto to the user'),
	new SlashCommandBuilder().setName('updatestocks').setDescription('Updates the list of stocks to most recent data'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.DJS_TOKEN);

(async () => {
	try {
		await rest.put(
            Routes.applicationCommands(process.env.DJS_CLIENT_ID),
            { body: commands },
        );

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();