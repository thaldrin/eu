import { Context } from '../../../../utils/types'
export default class Command {
    name?: string
    description?: string
    cooldown?: number
    permissions?: string[]
    hidden?: boolean
    nsfw?: boolean

    guild?: boolean
    dev?: boolean
    usage?: string
    aliases?: string[]


    constructor(command: {
        name?: string
        description?: string
        cooldown?: number
        permissions?: string[]
        hidden?: boolean
        nsfw?: boolean

        guild?: boolean
        dev?: boolean
        usage?: string
        aliases?: string[]
    }) {
        this.name = command.name || "generic";
        this.description = command.description || "generic command base";
        this.cooldown = command.cooldown || 1;
        this.permissions = command.permissions || ["NONE"];
        this.hidden = command.hidden || false;
        this.nsfw = command.nsfw || false;
        this.guild = command.guild || false;
        this.dev = command.dev
        this.usage = command.usage
        this.aliases = command.aliases || [];
    }

    async run(context: Context): Promise<any> {
        throw new Error("Not Implemented");
    }

}