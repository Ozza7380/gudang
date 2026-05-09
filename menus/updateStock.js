import { ask } from "../input.js";
import { saveAll } from "../repository.js";
export async function updateStok(dataBase) {
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
                        return;
                    }
                    //mengupdate stock
                    products[indexProduct].stok += qty
                    //simpan data difile
                    saveAll(products)
                    console.log("Berhasil update!!")
}