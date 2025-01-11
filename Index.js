// דרישות חיצוניות
const { Client, Intents } = require('discord.js');

// יצירת אובייקט בוט
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// התחברות עם הטוקן
client.login(process.env.DISCORD_TOKEN);

// פעולה בעת התחברות הבוט
client.once('ready', () => {
    console.log('The bot is online!');
});
