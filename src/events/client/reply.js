const fs = require('fs');

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if(message.content.indexOf('obama') > -1) {
      message.reply('who?')
    }

    const lukeResponses = [
      "You don't even have a csgo coin!",
      'Such a loser',
      "Did you get the mic?",
      "This was the most CRINGE message ive read... STOP!",
      "You're Broke... I'm Up!",
      "That's what a SIMP would say!",
      "https://tenor.com/view/shrek-snap-cringe-compilation-gif-12010326",
      "https://tenor.com/view/skate-black-buff-cranberry-gif-19073727",
      "https://tenor.com/view/dioramoseggloshara-gif-25426460",
      "https://tenor.com/view/black-man-staring-gif-22222579",
      "Sorry, Try Again!",
      "Bruh, what did I just read?",
      "L",
      ":neutral_face::grimacing:",
      ":boi:"
    ];

    if (message.author.id == '311172537033687040') {
      let lastMessageSent = '';

      try {
        lastMessageSent = await fs.readFileSync('/home/daniel/betterbot/Discordbot/tmp/lukesLastMessage.txt', 'utf8');
      } catch (err) {
        console.error(err);
      }

      const newMessageTimeStamp = message.createdTimestamp.toString();

      if (parseInt(newMessageTimeStamp) - parseInt(lastMessageSent) >= 300000) {
        const reply = lukeResponses[Math.floor(Math.random() * lukeResponses.length)];
        message.reply(reply);

        fs.writeFile('/home/daniel/betterbot/Discordbot/tmp/lukesLastMessage.txt', newMessageTimeStamp, err => {
          if (err) {
            console.error(err);
          }
        });
      }
    }

    message.mentions.users.forEach((user) => {
      switch(user.id) {
        case '218371602880921602':
          message.reply('Do you have an appointment?')
          break
        case '450785723721711619':
          message.reply('')
          break;
          
        default:
          // default 311172537033687040
      }
    })
  },
};