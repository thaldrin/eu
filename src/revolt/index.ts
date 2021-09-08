import { Client } from "revolt.js";
import { Collection, join, read } from "../misc/imports";

import { Construct as ConstructType, Command as CommandType, Event as EventType } from "../misc/types";

import Command from "../misc/command"
class Eu extends Client {
    revolt: Client;
    events: Collection<string, EventType>
    commands: Collection<string, CommandType>
    // slashcommands?: Collection<string, SlashCommand>
    cooldowns: Collection<unknown, unknown>
    config: any
    #eval?: any
    construct: ConstructType
    token: string;
    devs?: string | string[]
    commandCategories?: boolean
    constructor(Construct: ConstructType) {
        super({
            apiURL: Construct.options?.apiURL,
        });
        this.commands = new Collection<string, CommandType>();
        this.events = new Collection<string, EventType>();
        this.cooldowns = new Collection<unknown, unknown>();
        this.revolt = this;
        // this.config = Construct.config;
        this.devs = Construct.options?.devs
        this.token = Construct.token;
        this.construct = Construct;
        this.commandCategories = Construct.options?.commandCategories
        this.load();
        this.loginBot(this.token);
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

        if (this.commandCategories) {
            commands.filter((f) => !f.endsWith(".js") && !f.endsWith(".ts")).forEach(async (folder) => {
                const FolderCommands = await read(join(this.construct.commands, folder));

                FolderCommands.filter(file => file.endsWith(".js") || file.endsWith(".ts")).forEach(file => {
                    try {
                        const command = require(join(this.construct.commands, folder, file));
                        const c = new command()
                        c.module = folder
                        this.commands.set(command.name, command);
                        console.log(`Loaded command: ${folder}/${file}`);
                    } catch (error) {
                        console.error(error);
                    }
                }
                )
            }
            )

        }
        // Filter out the Command files that don't end with js or ts
        if (!this.commandCategories) {
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
}
// export type { EuClient, Construct, Command, Event } from "./misc/types"
export default { Client: Eu, Command };