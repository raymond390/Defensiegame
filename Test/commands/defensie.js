const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var reason = args.slice(1).join(" ");
    
    var botEmbed = new discord.MessageEmbed()
            .setTitle('Defensie')
            .setColor("#0099ff")
            .setDescription("\nwerken bij defensie je moet het maar kunnen")

            .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
            .setImage('https://cdnv2.dropr.io/image/ko3HlIZsSTWbVyqKV_IcQg/wzCKzPiB/580x330/sf/28523e6b-8e66-4bb6-952a-1452567a9d0f.jpg?cache_buster=22553c66faffbdf97b4990a0f56aec78aa63d870')
            .setTimestamp()
            .setFooter('Defensie', '');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "defensie",
    description: "Geeft defensie motto weer",
    category: "Informatie"
}