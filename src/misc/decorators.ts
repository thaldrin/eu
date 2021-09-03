import { Command } from "./types";

// export function NSFW(...args: any[]) {
//     console.log("Enabling NSFW")
//     console.log(args);
// }

export function NSFW(c: Function) {
    console.log(c)
    c.prototype.nsfw = true;
}