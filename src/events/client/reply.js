module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if(message.content.indexOf('obama') > -1) {
      message.channel.send('who?')
    }

    message.mentions.users.forEach((user) => {
      switch(user.id) {
        case '218371602880921602':
          message.channel.send('Do you have an appointment?')
          break
        case '450785723721711619':
          message.channel.send('')
          break;
          
        default:
          // default
      }
    })
  },
};