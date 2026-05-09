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

export function findByName(name) {
    return findAll().find(p => p.name == name);
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
                const id = (new Date()).toISOString()
                const nama = await ask("Nama Barang: ");
                const kategori = await ask("Kategori: ");
                const stok = Number(await ask("Jumlah Stok: "));
                //jika stok bukan angka tampilkan eror
                if (!!stok) {
                    //panggil seluruh data
                const result = dataBase
                //membuat object dari input
                const newProduct = {
                    id,
                    nama,
                    kategori,
                    stok
                }
                //tambahkan object baru dari seluruh data atau result
                result.push(newProduct)
                //simpan difile
                saveAll(result)
                } else {
                    console.log("Stok harus angka!")
                }
                break;
            }
        case "3":
            {
                //tanyakan nama dan jumlah barang yang akan diupdate
                const name = await ask("Nama: ")
                const qty = Number(await ask("Qty: "))
                //panggil semua data
                const products = dataBase;
                //cari index berdasarkan nama
                const indexProduct = products.findIndex((product) => product.nama.toLocaleLowerCase().includes(name));
                //jika tidak ketemu dengan index -1, infokan barang tidak ada dan jalankan break
                if (indexProduct === -1) {
                    console.log("Barang tidak ada!")
                    break;
                }
                //jika ada update stok berdasarkan indexnya
                
                //simpan data difile
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