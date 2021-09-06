import { Collection, join, read, Client, Intents } from "../misc/imports";
import { Construct as ConstructType, Command as CommandType, Event as EventType } from "../misc/types";

import Command from "../misc/command"

class Eu extends Client {
    discord?: Client;
    events: Collection<string, EventType>
    commands: Collection<string, CommandType>
    // slashcommands?: Collection<string, SlashCommand>
    cooldowns: Collection<unknown, unknown>
    config: any
    #eval?: any
    construct: ConstructType
    constructor(Construct: ConstructType) {
        super({
            intents: Construct?.options?.intents
        });
        this.commands = new Collection<string, CommandType>();
        this.events = new Collection<string, EventType>();
        this.cooldowns = new Collection<unknown, unknown>();
        this.discord = this;
        // this.config = Construct.config;
        this.token = Construct.token;
        this.construct = Construct;
        this.load();
        this.login(this.token);
    }

    async load() {

        const events = await read(join(this.construct.events));
        const commands = await read(join(this.construct.commands));
        // const slashcommands = await read(join(__dirname, this.construct.slashcommands));

        // Filter out the Event files that don't end with js or ts
        events.filter(file => file.endsWith(".js") || file.endsWith(".ts")).forEach(file => {
            try {
                const event = require(join(this.construct.events, file));
                console.log(`Loaded event: ${file}`);
                this.events.set(event.name, event);
                this.on(event.name, event.run.bind(null, this));
            } catch (error) {
                console.error(error);
            }
        })


        // Filter out the Command files that don't end with js or ts
        commands.filter(file => file.endsWith(".js") || file.endsWith(".ts")).forEach(file => {
            try {
                const Command = require(join(this.construct.commands, file));
                const command = new Command();

                this.commands.set(command.name, command);
                console.log(`Loaded Command: ${file}`);

            } catch (error) {
                console.error(error);
            }
        })


    }
}

// export type { EuClient, Construct, Command, Event } from "./misc/types"
export default { Client: Eu, Command };