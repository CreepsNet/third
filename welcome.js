module.exports = (client) =>{
    const channelId = "921856373015343165";
    const rulesChannel = "921860721648730113";
    client.on("guildMemberAdd", (member) =>{
       console.log(member);

       const message = `Welcome <@${member.id}> to our server! Make sure to check the ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;

       const channel = member.guild.channels.cache.get(channelId);
       channel.send(message);
    });
};