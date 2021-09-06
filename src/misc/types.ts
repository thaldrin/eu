import { Client, Collection } from "./imports";
//  SlashCommand = {
//     // Command Specific
//     name: string
//     description: string
//     permissions?: string | string[]
//     global?: boolean
//     guilds?: string | string[]
//     nsfw?: boolean

//     guild?: boolean
//     dev?: boolean
//     usage?: string

// }

// type Construct = {
//     events: string
//     commands: string
//     token: string
//     options: {
//         intents: any,
//     }
//     // config: Config
// }

declare namespace Eu {
    interface EuClient {
        discord: Client,
        commands: Collection<string, Command>
        events: Collection<string, Event>
        cooldowns: Collection<unknown, unknown>

        // config?: Config
        eval: any
        construct: Construct
    }

    interface Construct {
        events: string
        commands: string
        token: string
        options: {
            intents: any,
        }
    }
    interface Command {
        // Command Specific
        name?: string
        description?: string
        cooldown?: number
        permissions?: string | string[]
        hidden?: boolean
        nsfw?: boolean

        guild?: boolean
        dev?: boolean
        usage?: string
        aliases?: string[]


    }

    interface Event {
        name: string
    }
}

export = Eu