const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedDescrisCode = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**▬[ <a:tik5:803962087621394432> **Grave Bot Logo Sistemi** <a:tik5:803962087621394432> ]▬**  \n\n> <a:botv10:841603921386799104> **Şuanda kullanılan prefix** `-`")
.setThumbnail("https://media.discordapp.net/attachments/851190335248793630/851200310831087636/standard_2.gif")
.setDescription(`

▬▬[ <a:tik4:803962069300936744> **Grave Bot Logo Sistemi** <a:tik4:803962069300936744> ]▬▬

> <a:ates:739608060942614559> **» -anime**
> <a:ates:739608060942614559> **» -ok**
> <a:ates:739608060942614559> **» -mavi**
> <a:ates:739608060942614559> **» -booking**
> <a:ates:739608060942614559> **» -bubble**
> <a:ates:739608060942614559> **» -cool**
> <a:ates:739608060942614559> **» -dinamik**
> <a:ates:739608060942614559> **» -fire**
> <a:ates:739608060942614559> **» -gold**
> <a:ates:739608060942614559> **» -green**
> <a:ates:739608060942614559> **» -comic**
> <a:ates:739608060942614559> **» -müzik**
> <a:ates:739608060942614559> **» -renkli**
> <a:ates:739608060942614559> **» -skull**

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
    name: 'logo',
    description: 'Logo menüsü',
    usage: 'logo'
};
