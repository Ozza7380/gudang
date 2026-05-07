import fs from "fs";


export function readJSON(path) {
    try {
        const data = fs.readFileSync(path, "utf-8");
        return JSON.parse(data);
    } catch {
        return []
    }
}

export function writeJSON(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
}