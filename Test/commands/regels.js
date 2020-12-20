const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "767840049299062824";

    

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Regels')
    .setDescription(`**nederlandse**
    1,niet aubse met staff vesten.
    2,niet tegen hoger staff in gaan zal je dit doen kan tot warn/demote leiden.
    3,niet bemoien met jails van andere staff-leden.
    4,niet staff vest aan als je kamr/landmacht bent.!
    5,Luister altijd naar HR+&HC+.!
    6,ALS staff AA/admin-aubse zal doen kan deze onslagen worden door Managerment.
    7,ga je zeuren/vragen om promo dan wordt je onslagen door OC+
    8,zal je niet aan deze regel houden is het jammer voor je ranks.
    9,OF mag ook niet meer over de lijne waarom te veel aubse dan doe je dit maar als bezeoker.
    10, GEEN  autos naar gate 
    11. geen hoger outfit aan
    12, niet als landmacht bij kmar staan of kmar bij landmacht.
    13, staff leden morgen niet meer on noding fly doen 
    (**ENGLES**)-------------------------------------------------------------------------
    1, please do not use staff vests.
    2, do not go against higher staff you will do this can lead to warn / demot.
    3, don't bother with other staff members' jails.
    4, do not wear staff vest if you are kamr / army.!
    5, Always listen to HR + & HC +.!
    6, IF staff will do AA / admin-please, it can be canceled by Managerment.
    7, if you suck / ask for promo, you will be knocked out by OC +
    8, you won't stick to this rule it's too bad for your ranks.
    9, OR is not allowed anymore, why too much please do this as a user.
    10, NO cars to gate
    11. no higher outfit
    12, do not stand as army with kmar or kmar with army.
    13, staff members will no longer do on noding fly tomorrow`)
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('')
    .setTimestamp()
    .setFooter('Defensie', '');

    

return message.channel.send(botEmbed);

    } else {
        

    message.channel.send("Gelieve dit command te doen bij een ticket.");
    }
}

module.exports.help = {
    name: "regels",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}