const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()

  .addField("**<a:ayar:803595478620962867> __Kullanıcı Sayısı__** ", ` ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("**<a:ayar:803595478620962867> __Sunucu Sayısı__**", ` ${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("**<a:ayar:803595478620962867> __Aktiflik__**", ` ${payidarzaman}`, true)
  .addField("**<a:ayar:803595478620962867> __Discord.JS__**", ` ${Discord.version}`, true)
  .addField("**<a:ayar:803595478620962867> __Bot Sahibi__**",`<@724504410960429088>`, true)
  .addField("**<a:ayar:803595478620962867> __Geliştirici__**", `<@724504410960429088>`, true)
  .setDescription('**Grave Bot İstatistik Sistemi**')
  .setImage('https://images-ext-1.discordapp.net/external/2DPMrqfpQzAsVuum7bBrMJa3O4ns58-tBGxFfaWI9tE/https/media.discordapp.net/attachments/851190335248793630/851198756220567593/standard_3.gif')

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "istatistik"
};
