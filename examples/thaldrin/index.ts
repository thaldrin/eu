import { Discord, Revolt } from '~/src/index'
import { join } from 'path'
import { Intents } from '~/src/misc/imports'

let Thaldrin = new Revolt.Client({
    token: 'no',
    commands: join(__dirname, 'commands'),
    events: join(__dirname, 'events',),
    options: {
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    }
})


Thaldrin.on("ready", () => {
    console.log("ready")
})
