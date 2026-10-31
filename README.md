# HMTE Website

Website resmi Himpunan Mahasiswa Teknik Elektro (HMTE) yang berfungsi sebagai media informasi organisasi, dokumentasi kegiatan, dan penghubung komunikasi mahasiswa dengan HMTE.

Project ini dibuat menggunakan HTML statis, Tailwind CSS, dan JavaScript vanilla untuk menghasilkan tampilan yang responsif dan mudah dikelola.

## Fitur

- Landing page HMTE dengan hero section dan CTA
- Informasi profil organisasi dan visi-misi kegiatan
- Halaman program kerja dan dokumentasi kegiatan
- Galeri kegiatan dengan filter berdasarkan tahun
- Halaman kontak, aspirasi, kolaborasi, dan struktur organisasi
- Navbar dan footer reusable yang dimuat dari komponen terpisah
- Toggle dark mode sederhana
- Desain responsif untuk desktop dan mobile

## Teknologi yang Digunakan

- HTML5
- Tailwind CSS (via CDN)
- JavaScript Vanilla
- Static assets untuk logo dan gambar kegiatan

## Struktur Proyek

```text
hmte-website/
├── index.html
├── tentang.html
├── program-kerja.html
├── galeri.html
├── kontak.html
├── aspirasi.html
├── kolaborasi.html
├── struktur.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
│       ├── components-loader.js
│       ├── gallery.js
│       └── main.js
├── components/
│   ├── navbar.html
│   └── footer.html
└── README.md
```

## Halaman Utama

### `index.html`
Halaman beranda yang berisi:
- Hero section
- Profil singkat HMTE
- Kegiatan terbaru
- Call-to-action untuk kolaborasi dan aspirasi

### `tentang.html`
Halaman yang berisi informasi umum tentang HMTE dan organisasi.

### `program-kerja.html`
Halaman yang menampilkan program kerja atau aktivitas organisasi.

### `galeri.html`
Halaman galeri kegiatan dengan filter berdasarkan tahun. Data galeri dikelola di `assets/js/gallery.js`.

### `kontak.html`
Halaman kontak resmi HMTE.

### `aspirasi.html`, `kolaborasi.html`, `struktur.html`
Halaman tambahan untuk aspirasi, kolaborasi, dan struktur organisasi.

## Komponen UI

Navbar dan footer dibuat terpisah agar lebih mudah dikelola dan digunakan ulang di beberapa halaman.

- `components/navbar.html`
- `components/footer.html`

Komponen tersebut dimuat secara dinamis oleh:

- `assets/js/components-loader.js`

## JavaScript

### `assets/js/main.js`
Menangani:
- toggle dark mode
- membuka/menutup menu mobile

### `assets/js/gallery.js`
Menangani data galeri dan render card kegiatan berdasarkan tahun yang dipilih.

## Cara Menjalankan

Karena project ini merupakan website statis, cukup jalankan dengan server lokal.

### Opsi 1: Python

```bash
cd hmte-website
python -m http.server 8000
```

Lalu buka browser ke:

```text
http://localhost:8000
```

### Opsi 2: Live Server di VS Code

Buka folder project di VS Code, lalu jalankan extension Live Server.

## Catatan

- Repository ini menggunakan asset lokal yang disimpan di folder `assets/img`.
- Website bersifat static dan tidak memerlukan setup backend.
- Untuk pengembangan lanjut, struktur file dikelola agar mudah diubah tanpa harus mengganti tiap halaman satu per satu.

## Tujuan Project

Project ini dibuat sebagai landing page dan portal informasi HMTE yang modern, rapi, dan mudah diakses oleh mahasiswa maupun publik.

## Lisensi

Project ini dibuat untuk kebutuhan internal organisasi dan dapat dikembangkan lebih lanjut sesuai kebutuhan HMTE.
