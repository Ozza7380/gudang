import { readJSON, writeJSON } from "./storage.js";
const PATH = "gudang.json"

export function saveAll(products) {
    writeJSON(PATH, products)
}
export function findAll() {
    return readJSON(PATH);
}
export const dataBase = readJSON(`gudang.json`);