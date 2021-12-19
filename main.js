const Discord = require("discord.js");
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"];
const client = new Discord.Client({
    intents: intents,
    ws: { intents: intents },
}); 

const welcome = require("./welcome");

client.on("ready", () => {
    console.log("Welcomer is online!")

    welcome(client);
})

client.login(process.env.token);