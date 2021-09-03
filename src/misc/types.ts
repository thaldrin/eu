import { Client, Collection } from "./imports";

export { IntentsString } from "discord.js";


export type Event = {
    name: string
}

export type Command = {
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

export type EuClient = {
    discord: Client,
    commands: Collection<string, Command>
    events: Collection<string, Event>
    cooldowns: Collection<unknown, unknown>

    config?: Config
    eval: any

    construct: Construct

}

export type Config = {

}


// let x: EuCLient

// export type SlashCommand = {
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

export type Construct = {
    events: string
    commands: string

    token: string
    options: {
        intents: any,
    }
    config: Config
}