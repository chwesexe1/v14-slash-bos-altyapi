const { ActivityType } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const config = require("../config.json");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);

const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 3
});

module.exports = async (client) => {

  const rest = new REST({ version: "10" }).setToken(config.token);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }
  
  console.log(`[BAŞLA] ${client.user.username} bot hazır!`);

  const status = "Tech Development <3";

  client.user.setPresence({
    activities: [{ name: status, type: ActivityType.Playing,}],
    status: 'idle',
  });
};
/*
! ÖNEMLİ:
* Eğer Botun Durumunu boşta rahatsız etmeyin veya çevrimiçi yapmak istiyor iseniz
 
const status = "Tech Development <3";

client.user.setPresence({
  activities: [{ name: status, type: ActivityType.Streaming, url: `${config.twitch}` }],
  status: 'idle',
});
};
! YUKARIDAKİ KODU AŞAĞIDAKİ KOD ŞEKLİNDE GÜNCELLEYİN

const status = "Tech Development <3";

  client.user.setPresence({
    activities: [{ name: status, type: ActivityType.Playing,}],
    status: 'idle',
  });
};

? Botun Durumunu değiştirmek için aşağıda
status: 'online', çevrimiçi
status: 'dnd', rahatsız etmeyin
status: 'idle', boşta
*/