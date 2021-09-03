import { NSFW } from "../../../src/misc/decorators"
import Eu from "../../../src/index"



export = class TestingCommand extends Eu.Command {
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
