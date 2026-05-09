import { ask } from "./input.js";
import { saveAll,findAll,dataBase  } from "./repository.js";
import { tambahProduk } from "./menus/tambah.js";
async function menu() {

    console.log(`
        === MENU GUDANG ===
        1. Lihat Semua Barang
        2. Tambah Barang Baru
        3. Update stok
        4. Hapus Barang
        5. Cari Barang
        6. Update Harga
        7. Update Nama
        8. Update Kategori
        0. Keluar`);
    const pilihan = await ask("Pilih menu (1-6): ");

    switch (pilihan) {
        case "1":
            {
                console.table(dataBase);
                break;
            }
        case "2":
            await tambahProduk(dataBase)
                break;
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
                //mengupdate stock
                products[indexProduct].stok += qty
                //simpan data difile
                saveAll(products)
                console.log("Berhasil update!!")
                break;
            }
        case "4":
            {
                // input nama barang yang akan dihapus
                const namaHapus = await ask("Nama barang yang akan dihapus: ")
                //cari semua data
                const products = dataBase;
                //cari index berdasarkan nama
                const indexProduct = products.findIndex((product) => product.nama.toLocaleLowerCase().includes(namaHapus))
                // jika tidak ada tampilkan barang tidak ada
                if (indexProduct === -1) {
                    console.log("Barang tidak ada!")
                    break;
                }
                //hapus barang
                products.splice(indexProduct, 1)
                //simpan 
                saveAll(products)
                console.log("Barang berhasil dihapus!")
                break;
            }
        case "5":
            {
                const keyword = await ask("Cari nama barang: ");
                const hasil = dataBase.filter(b => b.nama.toLowerCase().includes(keyword.toLocaleLowerCase()));
                console.table(hasil)
                break;
            }

        case "0":
            {
                console.log("Terimakasih!");
                process.exit();
                break;
            }
        default:
            console.log("Pilihan tidak tersedia")
    }
    await menu()

}
menu()