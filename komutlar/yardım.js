const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬▬[ <a:tik5:803962087621394432> **Grave Bot** <a:tik5:803962087621394432> ]▬▬**  \n\n> <a:botv10:841603921386799104> **Şuanda kullanılan prefix** `-`")
.setThumbnail("https://media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif")
.setDescription(`

▬▬[ <a:tik4:803962069300936744> **Grave Bot** <a:tik4:803962069300936744> ]▬▬

> <a:ates:739608060942614559> **» -moderasyon**
> <a:ates:739608060942614559> **» -moderasyon2**
> <a:ates:739608060942614559> **» -eğlence**
> <a:ates:739608060942614559> **» -logo**
> <a:ates:739608060942614559> **» -sunucu-kur**


> <a:ates:739608060942614559> **» -istatistik**
> <a:ates:739608060942614559> **» -yapımcım**
> <a:ates:739608060942614559> **» -bug-bildir <bug>**


**» Bağlantılar**
<a:bluestar:770535818007543819> [**Destek Sunucusu**](https://discord.gg/YZPaBZTsHA) \n <a:bluestar:770535818007543819> [**Botun Davet Linki**](https://discord.com/api/oauth2/authorize?client_id=769869564322119690&permissions=8&scope=bot)
`)

.setImage('https://media.discordapp.net/attachments/851190335248793630/851198756220567593/standard_3.gif')
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedDescrisCode)
.then;

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

  exports.help = {
    name: 'yardım',
    description: 'The Help Command',
    usage: 'help'
};
