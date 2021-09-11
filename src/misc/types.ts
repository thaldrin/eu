import { Client as DiscordClient, Collection } from "./imports";
import { Client as RevoltClient } from "revolt.js";

declare namespace Eu {
    /**
     * The Main Client, universal between both Discord and Revolt
     */
    interface EuClient {
        /** 
         * Collection of Commands using Discord.JS Collection functionality
         */
        commands: Collection<string, Command>
        /** 
         * Collection of Events using Discord.JS Collection functionality
         */
        events: Collection<string, Event>
        /** 
         * Collection of Cooldowns using Discord.JS Collection functionality
         */
        cooldowns: Collection<unknown, unknown>
        /** The Config, provided by the user and used throughout the Framework */
        construct: Construct
    }
    /** The Config, provided by the user and used throughout the Framework */
    interface Construct {
        /** The Discord Client */
        discord?: DiscordClient
        /** The Revolt Client */
        revolt?: RevoltClient
        /** the path where the event files are stored */
        events: string
        /** the path where the commands files are stored */
        commands: string
        /** the bot token */
        token: string
        options?: {
            /** [DISCORD]
             * Intents the Bot needs to work on Discord
             */
            intents?: any,
            /** [REVOLT]
             * The Revolt API URL, if the but runs on a Self-Hosted Revolt Instance
             */
            apiURL?: string,
            /** 
             * Devs of the Bot, used for the Developer Commands
            */
            devs?: string | string[],
            /** If the Framework should spit out Debug logs */
            debug?: boolean
            /** 
             * If you want Eu to automatically set the Categories or if you want to do it manually
            */
            commandCategories?: boolean
        }
    }
    interface Command {
        /** The Command name, primary way of calling the command
         * @exmaple `!ping`
         */
        name?: string
        /** The Command description, used for the help command */
        description?: string
        /** How long the command is unusable, usually for a single User */
        cooldown?: number
        /** The Permissinons needed for a Command to run */
        permissions?: string | string[]
        /** If the Command shows up in the Help Command */
        hidden?: boolean
        /** If the Command is only allowed to be ran in NSFW Channels */
        nsfw?: boolean
        /** The Category the command is in */
        category?: string

        /** If the Command is only allowed to be ran in guilds */
        guild?: boolean
        /** If the Command is only allowed to be ran by Developers */
        dev?: boolean
        /** How to use the command */
        usage?: string
        /** Other "Names" for the Command */
        aliases?: string[]

        /** The function that is ran when the Command is called */
        run(ctx: Command): void


    }

    interface Event {
        /** Event name, requires whatever client.on() can listen to */
        name: string
    }
}

export = Eu

