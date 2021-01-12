const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class UserInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'serverinfo',
      group: 'misc',
      memberName: 'serverinfo',
      description: 'Displays information a user',
    })
  }
  run = async (message) => {
    const { guild, channel } = message

const { name, region, memberCount, owner, afkTimeout } = guild
const icon = guild.iconURL()

const embed = new MessageEmbed()
  .setTitle(`Server info for "${name}"`)
  .setThumbnail(icon)
  .addFields(
    {
      name: 'Region',
      value: region,
    },
    {
      name: 'Members',
      value: memberCount,
    },
    {
      name: 'Owner',
      value: owner.user.tag,
    },
    {
      name: 'AFK Timeout',
      value: afkTimeout / 60,
    }
  )

message.channel.send(embed)
}
}