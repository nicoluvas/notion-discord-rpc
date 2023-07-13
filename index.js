const { Client } = require("@notionhq/client");
const { Client: DiscordRPCClient } = require("discord-rpc");
const fs = require('fs');



// Configuração do cliente do Notion
const notion = new Client({
  auth: "secret_eIFK4udyh5YZlGqFmbBPlCjsRifAM0NMcQ4o6miaQxJ",
});

// Configuração do cliente do Discord Rich Presence
const clientId = "1128841660512600116";
const discordClient = new DiscordRPCClient({ transport: "ipc" });

const notionLarge = 'https://media.discordapp.net/attachments/1000909381384294514/1128856690247340052/notion-so.png';

// Função principal para iniciar a conexão com o Discord e atualizar a presença rica
const start = async () => {
  // Inicia a conexão com o Discord Rich Presence
  await discordClient.login({ clientId });

  discordClient.setActivity({
    details: "Editing a Notion page",
    state: "✍️",
    startTimestamp: new Date(),
    largeImageKey: notionLarge,
    largeImageText: "Notion",
  });
};

// Inicia o programa
start();
