require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (!message.author.bot && message.channel.name !== "chat") {
    try {
      await axios.post(process.env.WEB_HOOK_URL, {
        username: message.author.username,
        content: message.content,
        channel: message.channel.name,
        authorId: message.author.id,
        channelId: message.channel.id,
        masseageId: message.id
      });
    } catch (error) {
      console.error("❌ Failed to send to n8n:", error.message);
    }
  }
});

client.login(process.env.BOT_TOKEN);
