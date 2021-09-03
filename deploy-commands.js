const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('stock').setDescription('Reccomends a random stock to the user'),
    new SlashCommandBuilder().setName('crypto').setDescription('Reccomends a random cypto to the user'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();