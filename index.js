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
      await axios.post("http://oshan-n8n-303e1f-95-111-248-142.traefik.me/webhook-test/99cae660-70b4-438b-9e74-379cc0f0faa6", {
        username: message.author.username,
        content: message.content,
        channel : message.channel,
        channelId : message.channel.id,
        author : message.author,
        authorId : message.author.id,
      });
    } catch (error) {
      console.error("❌ Failed to send to n8n:", error.message);
    }
  }
});

client.login(process.env.BOT_TOKEN);
