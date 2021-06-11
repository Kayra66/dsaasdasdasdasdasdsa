const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın Ama Senin Yok Kullanamazsın`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`Yazı Yazmayı Unuttun bro`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("5a0a83")
        .setThumbnail('https://images-ext-1.discordapp.net/external/OPbp2nn4IZ9WDTyiqDeKSSmBLCbPVBWjOp4mPRPTe7Y/https/media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif')
        .setTimestamp()
        .setFooter("Grave", client.user.avatarURL())
        .addField(`${client.user.username}`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✔️");
      message.react("❌");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama","voting"],
  permLevel: 0
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlamaktadır.",
  usage: "!oylama <oylamaismi>"
};
