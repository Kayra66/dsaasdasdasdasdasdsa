const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("842010992463446066")//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Grave Bug Sistemi")
.setThumbnail("https://media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")
.setImage('https://media.discordapp.net/attachments/851190335248793630/851198756220567593/standard_3.gif')

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("❤️"))




}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug-bildir',
  description: 'Bug Bildirme Komudu.',
  usage: 'bug-bildir'
}
