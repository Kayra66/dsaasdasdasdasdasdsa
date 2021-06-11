const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let Descris = args.slice(0).join(" ");
if (Descris.length < 1) {

return msg.reply("**Grave Bot | Kime kartopu atmak isterin ya isim yaz yada etiketle!**");

} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====   :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<===  :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<== :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${Descris} artık :snowman: oldu.`));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kar-topu",
  description: "",
  usage: ""
};
