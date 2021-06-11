const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:tik5:803962087621394432> **Grave Moderasyon Bot** <a:tik5:803962087621394432> ]▬**  \n\n> <a:botv10:841603921386799104> **Şuanda kullanılan prefix** `-`")
.setThumbnail("https://media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif")
.setDescription(`

▬▬[ <a:tik4:803962069300936744> **Grave Bot Moderasyon Bot** <a:tik4:803962069300936744> ]▬▬

> <a:ates:739608060942614559> **» -avatar**
> <a:ates:739608060942614559> **» -emojiekle**
> <a:ates:739608060942614559> **» -gel**
> <a:ates:739608060942614559> **» -git**
> <a:ates:739608060942614559> **» -kanal-kilit**
> <a:ates:739608060942614559> **» -komutlar**
> <a:ates:739608060942614559> **» -kullanıcıbilgi**
> <a:ates:739608060942614559> **» -ban**
> <a:ates:739608060942614559> **» -unban**
> <a:ates:739608060942614559> **» -banlist**

**» Bağlantılar**
<a:bluestar:770535818007543819> [**Destek Sunucusu**](https://discord.gg/YZPaBZTsHA) \n <a:bluestar:770535818007543819> [**Botun Davet Linki**](https://discord.com/api/oauth2/authorize?client_id=769869564322119690&permissions=8&scope=bot)
`)

.setImage('https://images-ext-1.discordapp.net/external/2DPMrqfpQzAsVuum7bBrMJa3O4ns58-tBGxFfaWI9tE/https/media.discordapp.net/attachments/851190335248793630/851198756220567593/standard_3.gif')
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
    name: 'moderasyon',
    description: 'The moderasyon Command',
    usage: 'moderasyon'
};
