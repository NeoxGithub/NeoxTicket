// @ts-nocheck

const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { helperError } = require("./helpers/utils");
const { checkConfig } = require("./helpers/config");

process.on("uncaughtException", helperError).on("unhandledRejection", helperError);

const checked = checkConfig();
if (!checked) process.exit(0);

const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);

const { TOKEN } = require("./config.json");
const { loadCommands } = require("./helpers/commandSystem");
const { loadEvents } = require("./helpers/eventSystem");

const client = new Client({
  intents: INTENTS,
  allowedMentions: { parse: ["users"] },
  partials: PARTIALS,
  retryLimit: 3,
});

loadCommands();
loadEvents(client);

client.login(TOKEN);

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => { 
joinVoiceChannel({
channelId: "1105516411889139722",
guildId: "1085590365278572714",       
adapterCreator: client.guilds.cache.get("1085590365278572714").voiceAdapterCreator
    });
});