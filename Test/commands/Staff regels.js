const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Geen perms");
    
    const categoryID = "767842762090479646";

    

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Staff Regels')
    .setDescription(`Staff regels

    -Ben je voor een tijd niet actief meld dit dan in #『🔒』inactiviteit-log.
    -Er word van je verwacht vaak online te zijn en trainingen te geven tenzij je in de #『🔒』inactiviteit-log staat.
    -Heb respect voor anderen.
    -Je gaat niet vragen voor een rank-up dit word vanzelf bepaald wanneer je er een krijgt.
    -Als je een ticket claimed zeg dan !claim, je kan altijd nog anderen toevoegen aan de ticket.
    -Ben je klaar met de ticket zeg dan !close zodat er niet 10 tickets openstaan.
    -Je gaat niet iemand suicidale gedachtes geven!!
    -We gaan nietmet ziektes schelden/praten dit kan gevoelig zijn bij sommigen.
    -Niet onnodig pingen en zeker niet spam pingen. 
    
    -Mocht je enige vragen hebben staat het staff team altijd voor je klaar in #『🔒』staffchat.
    -Mocht je hier nog iets aan toe willen voegen kopieer deze tekst en voeg je regel toe.
    -Het overtreden van de regels kan tot demote/ontslag leiden. `)
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
    name: "staffregels",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}