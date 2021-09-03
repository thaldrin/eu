import { Event, Construct, EuClient, Command } from '../../../src/misc/types';
import { Collection, Message, MessageEmbed } from "discord.js";
import Eu from '../../../src/index'

const prefix = '!';

export = {
    name: "messageCreate",
    run: async (Eu: EuClient, message: Message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift()?.toLowerCase()
        // @ts-ignore
        const cmd = Eu.commands.find((c) => c.name == command || (c.aliases && c.aliases.includes(command)))
        // console.log(
        //     {
        //         content: message.content, command, args, cmd
        //     }
        // )
        let ctx = "context"
        // @ts-ignore
        cmd.run(ctx)
    }
};