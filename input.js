import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({input, output})

export async function ask(q) {
    return (await rl.question(q)).trim()
}

export function closeInput() {
    rl.close()
}