import { ask } from "./input.js";
import { readJSON, writeJSON } from "./storage.js";
const PATH = "gudang.json"
export function findAll() {
    return readJSON(PATH);
}

export function saveAll(products) {
    writeJSON(PATH, products)
}
export function updateStock({ nama, qty }) {
    const products = repo.findAll()
    const product = products.find(p => p.nama == nama);
}

export function findById(id) {
    return findAll().find(p => p.id == id);
}
async function menu() {
    const dataBase = readJSON(`gudang.json`);

    console.log(`
        === MENU GUDANG ===
        1. Lihat Semua Barang
        2. Tambah Barang Baru
        3. Update stok
        4. Hapus Barang
        5. Cari Barang
        0. Keluar`);
    const pilihan = await ask("Pilih menu (1-6): ");

    switch (pilihan) {
        case "1":
            {
                console.table(dataBase);
                break;
            }
        case "2":
            {
                //input data
                const nama = await ask("Nama Barang: ");
                const kategori = await ask("Kategori: ");
                const stok = Number(await ask("Jumlah Stok: "));
                //panggil seluruh data
                const result = dataBase
                //membuat object dari input
                const newProduct = {
                    nama,
                    kategori,
                    stok
                }
                //tambahkan object baru dari seluruh data atau result
                result.push(newProduct)
                //simpan difile
                saveAll(result)
                break;
            }
        case "3":
            {
                const name = await ask("Nama: ")
                const qty = Number(await ask("Qty: "))

                const result = service.updateStock({ name, qty })
                console.log("Updated:", result)
                break;
            }
        case "4":
            {
                const hapus = await ask("Nama barang yang akan dihapus: ")
                    //   const terhapus = dataBase.find()
                    ; break;
            }
        case "5":
            {
                const keyword = await ask("Cari nama barang: ");
                const hasil = dataBase.filter(b => b.nama.toLowerCase().includes(keyword.toLocaleLowerCase()));
                break;
            }

        case "0":
            {
                console.log("Terimakasih!");
                process.exit;
                break;
            }
        default:
            console.log("Pilihan tidak tersedia")
    }
    await menu()

}
menu()