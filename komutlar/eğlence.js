const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:tik5:803962087621394432> **Grave Bot Eğlence Sistemi** <a:tik5:803962087621394432> ]▬**  \n\n> <a:botv10:841603921386799104> **Şuanda kullanılan prefix** `-`")
.setThumbnail("https://cdn.discordapp.com/attachments/823449558423830558/823453530680852520/pp.jpg")
.setDescription(`

▬▬[ <a:tik4:803962069300936744> **Grave Bot Eğlence Sistemi** <a:tik4:803962069300936744> ]▬▬

> <a:ates:739608060942614559> **» -adamasmaca**
> <a:ates:739608060942614559> **» -yazan-kazanır**
> <a:ates:739608060942614559> **» -aykutelmas**
> <a:ates:739608060942614559> **» -balık-tut**
> <a:ates:739608060942614559> **» -beleş-nitro**
> <a:ates:739608060942614559> **» -efkarım**
> <a:ates:739608060942614559> **» -espri**
> <a:ates:739608060942614559> **» -hesapla**
> <a:ates:739608060942614559> **» -ilginçbilgi**
> <a:ates:739608060942614559> **» -kaç-cm**
> <a:ates:739608060942614559> **» -kar-topu**
> <a:ates:739608060942614559> **» -napim**
> <a:ates:739608060942614559> **» -ömrüm**
> <a:ates:739608060942614559> **» -taksimdayı**
> <a:ates:739608060942614559> **» -yılbaşı**
> <a:ates:739608060942614559> **» -aşkölçer**

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
    name: 'eğlence',
    description: 'Eğlence menüsü',
    usage: 'eğlence'
};
