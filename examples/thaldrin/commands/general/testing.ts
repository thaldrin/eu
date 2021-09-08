import Command from "../../../../src/misc/command"



export = class TestingCommand extends Command {
    constructor() {
        super({
            name: "testing",
            aliases: ["t"],
        })
        // console.log(this)
    }

    async run(context: any): Promise<any> {
        console.log(context)
        // console.log(this.nsfw)
        return "Generic command"
    }
}
