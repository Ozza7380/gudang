import { ask } from "../input.js";
import { saveAll  } from "../repository.js";

export async function tambahProduk(dataBase){
                //input data
                const id = (new Date()).getTime()
                const nama = await ask("Nama Barang: ");
                const kategori = await ask("Kategori: ");
                const harga = Number(await ask("Harga barang: "))
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
                    harga,
                    stok
                }
                //tambahkan object baru dari seluruh data atau result
                result.push(newProduct)
                //simpan difile
                saveAll(result)
                console.log("Berhasil menambahkan produk!!")
                } else {
                    console.log("Stok harus angka!")
                }
            }