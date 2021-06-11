const Discord = require('discord.js');
exports.run = async (client , message, args ) => {
const descris = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor('Grave Bot')
.setDescription(` <a:tik5:803962087621394432> [**Beni Davet Et!**](https://discord.com/api/oauth2/authorize?client_id=769869564322119690&permissions=8&scope=bot) <a:ates:739608060942614559>
<a:tik5:803962087621394432> [**Destek sunucum**](https://discord.gg/MU2G2tXABn) <a:ates:739608060942614559>`)
message.channel.send(descris)
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'davet'
};
