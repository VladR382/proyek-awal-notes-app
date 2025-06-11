# Proyek Awal Notes App

Aplikasi web sederhana untuk membuat, mengelola, dan mencari catatan. Aplikasi ini dibangun menggunakan HTML, CSS, dan JavaScript vanilla, dengan memanfaatkan Custom Elements untuk membuat komponen UI yang modular dan dapat digunakan kembali.

## Fitur

* **Buat Catatan:** Pengguna dapat menambahkan catatan baru dengan judul dan isi.
* **Tampilkan Catatan:** Catatan yang aktif dan yang diarsipkan akan ditampilkan dalam daftar terpisah.
* **Arsipkan Catatan:** Pengguna dapat mengarsipkan dan membatalkan pengarsipan catatan.
* **Hapus Catatan:** Pengguna dapat menghapus catatan.
* **Cari Catatan:** Terdapat fungsionalitas pencarian untuk menyaring catatan berdasarkan judul atau isinya.
* **Penyimpanan Lokal:** Catatan disimpan di `localStorage` peramban, sehingga data akan tetap ada bahkan setelah peramban ditutup.
* **Desain Responsif:** Antarmuka pengguna dirancang agar dapat beradaptasi dengan berbagai ukuran layar.

## Pratinjau

Halaman utama menampilkan header dengan jam, formulir untuk menambahkan catatan baru, fungsionalitas pencarian, dan daftar catatan. Catatan yang ada dapat dilihat, diarsipkan, atau dihapus.

## Teknologi yang Digunakan

* **HTML:** Digunakan untuk struktur dasar aplikasi web.
* **CSS:** Digunakan untuk menata komponen antarmuka pengguna, termasuk tata letak, warna, dan tipografi.
* **JavaScript:** Digunakan untuk logika aplikasi, manipulasi DOM, dan penanganan event.
    * **Custom Elements:** Digunakan untuk membuat komponen UI yang dapat digunakan kembali seperti app-bar, footer-bar, note-form, note-list, dan note-item.
* **SweetAlert2:** Digunakan untuk menampilkan notifikasi dan dialog konfirmasi yang menarik secara visual.
* **Font Awesome:** Digunakan untuk ikon dalam aplikasi.

## Struktur Proyek

```
proyek-awal-notes-app/
├── asset/
│   └── icon.png
├── data/
│   └── notes-data.js         # Data catatan awal
├── script/
│   ├── components/
│   │   ├── app-bar.js        # Komponen App Bar
│   │   ├── footer-bar.js     # Komponen Footer
│   │   ├── note-form.js      # Komponen formulir catatan
│   │   ├── note-item.js      # Komponen item catatan
│   │   ├── note-list.js      # Komponen daftar catatan
│   │   └── note-search.js    # Komponen pencarian catatan
│   └── main.js               # Skrip utama aplikasi
├── styles/
│   └── styles.css            # Lembar gaya utama
└── index.html                # File HTML utama
```

## Instalasi dan Penggunaan

1.  **Kloning repositori:**
    ```bash
    git clone https://github.com/vladr382/proyek-awal-notes-app.git
    ```
2.  **Buka `index.html`:**
    Buka file `index.html` di peramban web pilihan Anda.

## Detail Komponen

### `<app-bar>`

* Menampilkan header aplikasi dengan judul "Notes App" dan jam yang terus diperbarui.

### `<note-search>`

* Menyediakan input pencarian untuk menyaring catatan.
* Menerapkan event `search-note` setiap kali nilai input berubah.

### `<note-form>`

* Menampilkan formulir untuk menambahkan catatan baru dengan input judul dan isi.
* Melakukan validasi untuk memastikan judul dan isi tidak kosong.
* Menerapkan event `add-note` ketika formulir diserahkan dengan data catatan yang baru.

### `<note-list>`

* Komponen utama yang mengelola dan menampilkan daftar catatan.
* Menangani penambahan, pengarsipan, dan penghapusan catatan.
* Menyaring catatan berdasarkan input pencarian.
* Memisahkan catatan menjadi daftar "Aktif" dan "Diarsipkan".

### `<note-item>`

* Menampilkan satu item catatan dengan judul, isi, dan tanggal pembuatan.
* Menyediakan tombol untuk mengarsipkan dan menghapus catatan.
* Menggunakan SweetAlert2 untuk konfirmasi sebelum menghapus.

### `<footer-bar>`

* Menampilkan footer aplikasi dengan informasi hak cipta.
# Proyek Aplikasi Catatan

Repositori ini berisi proyek awal sebuah aplikasi catatan sederhana yang dibangun menggunakan HTML, CSS, dan JavaScript dengan konsep *custom elements*.

## Deskripsi

Aplikasi ini memungkinkan pengguna untuk membuat, menampilkan, mengarsipkan, dan menghapus catatan. Data catatan disimpan di *local storage* peramban, sehingga data akan tetap ada meskipun halaman dimuat ulang. Proyek ini disusun dengan memisahkan komponen-komponen antarmuka pengguna ke dalam *custom elements* tersendiri untuk meningkatkan modularitas dan keterbacaan kode.

## Fitur

* **Buat Catatan**: Pengguna dapat menambahkan catatan baru melalui formulir yang tersedia.
* **Tampilkan Catatan**: Catatan yang aktif dan yang diarsipkan ditampilkan dalam daftar yang terpisah.
* **Arsipkan Catatan**: Pengguna dapat memindahkan catatan dari daftar aktif ke daftar arsip.
* **Hapus Catatan**: Pengguna dapat menghapus catatan secara permanen.
* **Pencarian Catatan**: Terdapat fitur pencarian untuk menyaring catatan berdasarkan judul atau isinya.
* **Penyimpanan Lokal**: Data catatan disimpan dalam *local storage* untuk persistensi data.
* **Jam Digital**: Menampilkan tanggal dan waktu saat ini di bagian *header*.

## Struktur Proyek

```
proyek-awal-notes-app/
├── asset/
│   └── icon.png
├── data/
│   └── notes-data.js     # Data awal catatan
├── script/
│   ├── components/
│   │   ├── app-bar.js        # Komponen header aplikasi
│   │   ├── footer-bar.js     # Komponen footer aplikasi
│   │   ├── note-form.js      # Komponen form untuk menambah catatan
│   │   ├── note-item.js      # Komponen untuk setiap item catatan
│   │   ├── note-list.js      # Komponen untuk daftar catatan
│   │   └── note-search.js    # Komponen untuk pencarian catatan
│   └── main.js             # Skrip utama untuk inisialisasi aplikasi
├── styles/
│   └── styles.css          # File styling utama
└── index.html              # Halaman utama aplikasi
```

## Komponen

* **`<app-bar>`**: Menampilkan judul aplikasi dan jam digital.
* **`<note-search>`**: Menyediakan input untuk mencari catatan.
* **`<note-form>`**: Formulir untuk menambahkan catatan baru.
* **`<note-list>`**: Menampilkan daftar catatan aktif dan yang diarsipkan.
* **`<note-item>`**: Merepresentasikan satu buah catatan dengan tombol untuk mengarsipkan dan menghapus.
* **`<footer-bar>`**: Menampilkan informasi hak cipta di bagian bawah halaman.

## Cara Menjalankan

1.  *Clone* repositori ini ke mesin lokal Anda.
2.  Buka file `index.html` di peramban web pilihan Anda.

Tidak ada dependensi eksternal yang perlu diinstal untuk menjalankan proyek ini, selain pustaka SweetAlert2 dan Font Awesome yang dimuat melalui CDN.

## Teknologi yang Digunakan

* **HTML**
* **CSS**
* **JavaScript (ES6 Modules & Custom Elements)**
* **SweetAlert2**: Untuk notifikasi yang menarik.
* **Font Awesome**: Untuk ikon.
