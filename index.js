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
  if (!message.author.bot) {
    try {
      await axios.post(process.env.WEB_HOOK_URL, {
        username: message.author.username,
        authorId: message.author.id,
        content: message.content,
        channel: message.channel.name,
        channelId: message.channel.id,
      });
    } catch (error) {
      console.error("❌ Failed to send to n8n:", error.message);
    }
  }
});

client.login(process.env.BOT_TOKEN);
