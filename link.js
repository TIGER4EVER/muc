const Discord = require("discord.js");
const client = new Discord.Client();

 client.on('message', message => {
    if (message.content.startsWith("https://discord.gg/byaT6PJ")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('https://discord.gg/R2R577x: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : يوم | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
}); 


client.login("NDgyMTg5Mjg5MDYxNDgyNDk4.DmBRzQ.9VzFiPj9Nc8939yPP5_N8Ds9_p8")