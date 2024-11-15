// index.js

// Import the discord.js library
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

// Your bot token (paste your bot token here)
const token = 'YOUR_BOT_TOKEN_HERE';

// When the bot is ready
client.once('ready', () => {
  console.log('Bot is online!');
});

// Handle incoming messages
client.on('messageCreate', message => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Command to check if the message starts with "!ping"
  if (message.content.toLowerCase() === '!ping') {
    message.reply('Pong!');
  }

  // Command to say hello
  if (message.content.toLowerCase() === '!hello') {
    message.reply('Hello, world!');
  }
});

// Log in to Discord with your app's token
client.login(token);
