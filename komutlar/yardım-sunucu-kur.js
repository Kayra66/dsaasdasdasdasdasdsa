const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:tik5:803962087621394432> **Grave Bot Sunucu Kur Sistemi** <a:tik5:803962087621394432> ]▬**  \n\n> <a:botv10:841603921386799104> **Şuanda kullanılan prefix** `-`")
.setThumbnail("https://media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif")
.setDescription(`

▬▬[ <a:tik4:803962069300936744> **Sunucu Kur Sistemi** <a:tik4:803962069300936744> ]▬▬

> <a:ates:739608060942614559> » Sunuculardan birini Kurduğunuzda Rollerin Permlerini Sizin Ayarlamanız Gerekiyor.

> <a:ates:739608060942614559> **» -sunucu-kur1:** Oyun
> <a:ates:739608060942614559> **» -sunucu-kur2:** Destek
> <a:ates:739608060942614559> **» -sunucu-kur3:** Emoji Odalı Public Sunucu
> <a:ates:739608060942614559> **» -sunucu-kur4:** Botlist
> <a:ates:739608060942614559> **» -sunucu-kur5:** Normal
> <a:ates:739608060942614559> **» -sunucu-kur6:** 2.Normal
> <a:ates:739608060942614559> **» -sunucu-kur7:** Youtuber & Streamer
> <a:ates:739608060942614559> **» -sunucu-kur8:** J4J
> <a:ates:739608060942614559> **» -sunucu-kur9:** Taglı Büyük Public
> <a:ates:739608060942614559> **» -sunucu-kur10:** Gif & J4J

**» Bağlantılar**
<a:bluestar:770535818007543819> [**Destek Sunucusu**](https://discord.gg/YZPaBZTsHA) \n <a:bluestar:770535818007543819> [**Botun Davet Linki**](https://discord.com/api/oauth2/authorize?client_id=769869564322119690&permissions=8&scope=bot)
`)

.setImage('https://media.discordapp.net/attachments/851190335248793630/851198756220567593/standard_3.gif')
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedDescrisCode)
.then; //Descris

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

  exports.help = {
    name: 'sunucu-kur',
    description: 'Sunucu Kur Yardım Menüsü',
    usage: 'sunucu-kur'
};
