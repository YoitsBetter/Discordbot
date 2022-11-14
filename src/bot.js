require("dotenv").config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}
client.handleEvents();
client.handleCommands();
client.login(token);

//npm run test//

//screen -S BetterBot (creates a 24/7)//
//screen -r BetterBot (goes /\ )
//screen -h (show everything)
//screen -ls running terminal//



// MAKE CHANGES TO SCREEN TERMINAL AND PUSH THERE TOO HAHAH//



//sh runner/start.sh
//sh runner/stop.sh
