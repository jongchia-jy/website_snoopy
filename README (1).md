# Website Pribadi: Kuning Lembut yang Ceria

Website pribadi satu halaman bertema kuning lembut dengan nuansa komik yang lucu: garis tebal, bayangan bergeser, dan rumah anjing mungil dari CSS. Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build.

## Catatan tentang tema Snoopy

Tema ini terinspirasi suasana komik anjing yang ceria: kuning hangat, merah rumah anjing, dan jejak kaki. Website ini **tidak** berisi gambar, nama, atau kutipan resmi Snoopy dan Peanuts karena itu karakter berhak cipta milik pemegang lisensinya.

Kalau Anda punya gambar sendiri atau gambar berlisensi dan ingin memakainya:

1. Simpan gambarnya di folder yang sama, misalnya `gambar.png`.
2. Di `index.html`, ganti seluruh `<button id="doghouse">...</button>` dengan:
   `<img src="gambar.png" alt="Deskripsi gambar" class="hero-img">`
3. Tambahkan di `style.css`: `.hero-img { width: 15rem; max-width: 100%; }`

Untuk dipakai pribadi, ini aman. Untuk website publik atau komersial, pastikan Anda punya izin penggunaannya.

## Fitur

- Bagian beranda, tentang, hobi, proyek, dan kontak
- Rumah anjing interaktif: ketuk untuk pesan baru dan jejak kaki yang melayang
- Sapaan yang berubah sesuai jam (pagi, siang, sore, malam)
- Mode siang dan malam, pilihan disimpan di browser
- Menu yang menyesuaikan layar ponsel dan penanda menu aktif
- Formulir kontak dengan validasi, mengirim lewat aplikasi email pengguna
- Mendukung navigasi keyboard dan pengaturan "kurangi gerakan"

## Struktur file

```
website-pribadi-kuning/
├── index.html   # isi halaman
├── style.css    # tampilan dan warna
├── script.js    # interaksi
└── README.md    # petunjuk ini
```

## Cara menjalankan

1. Simpan semua file dalam satu folder.
2. Buka `index.html` dengan dua kali klik. Tidak perlu server.

Font Fredoka dan Nunito dimuat dari Google Fonts. Tanpa internet, website tetap tampil dengan font bawaan sistem.

## Cara mengubah isi

1. **Nama dan ringkasan**: di `index.html`, ganti "Nama Anda" dan kalimat di bagian `hero`.
2. **Inisial di atap rumah**: ubah teks di `<span id="initials">`.
3. **Tentang, hobi, proyek**: edit teks di bagian masing-masing. Salin atau hapus blok `<article class="card">` sesuai jumlah proyek Anda.
4. **Pesan di balon kata**: edit daftar `pesan` di `script.js`.
5. **Email tujuan formulir**: ubah `EMAIL_TUJUAN` di `script.js`.

## Mengubah warna

Semua warna ada di bagian atas `style.css`:

| Variabel | Fungsi |
| --- | --- |
| `--bg` | latar halaman (kuning krem) |
| `--butter` | kuning lembut untuk titik latar dan kartu selang-seling |
| `--sun` | kuning cerah untuk header, footer, dan label hobi |
| `--red` | merah untuk tombol dan atap rumah |
| `--ink` | cokelat tua untuk teks dan garis tepi |

Warna mode malam ada di blok `[data-theme="night"]`.

## Menayangkan online

Unggah seluruh folder ke layanan hosting statis seperti GitHub Pages, Netlify, atau Cloudflare Pages.
