var botEmbed = new discord.MessageEmbed()
    
    .setTitle('Regels')
    .setColor("#f00c0c")
    .setDescription(`
    1. Niet Schelden!!
    2. Niet Spammen!
    3. Geen zelfpromotie/Reclame maken!!
    4. Respect voor elkaar!
    5. Staffleden hebben altijd de Laaste woord
    6. Niet zomaar om een rank up vragen!
    7. je mag niet abuse
    8. Maak geen misbruik van je rank/tools
    9. Je mag niet hacken meteen 3 warnings/kick
    10. Luister Altijd naar een stafflid zo niet 1 warn
    11. Niet Reclame in de server lopen maken en dan hebben we over linkjes van andere server,s Bijv
    
    STRAFFEN!!
    1. Dit kan een waarschuwing zijn.
    2. Een Mute (Oplopend tot 7 dagen
    3. Je kan verbannen worden van de server (Tot 10 dagen)`)
    .setTimestamp()
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://www.defensie.nl/binaries/large/content/gallery/defensie/content-afbeeldingen/organisatie/marechaussee/otc/foto-website-1.jpg')
    .setFooter('Defensie', '');

    var channel = message.member.guild.channels.cache.get("785197427464470578");

    if (!channel) return

    channel.send(botEmbed);


module.exports.help = {
    name: "regels",
    description: "",
    category: "Informatie"
}