# Post Cards | React Atomic Design & Router

Aplikasi ini mengambil post dari JSONPlaceholder dan menampilkannya dalam grid
kartu responsif. Kartu dapat dipilih secara independen, dicari berdasarkan
judul atau isi, dan dibuka pada halaman detail.

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Pemeriksaan proyek:

```bash
npm run lint
npm run build
```

## Materi yang diterapkan

- **Promise, Fetch API, dan async/await** mengambil post melalui `getPosts`.
- **`useState`** menyimpan data post, status pemuatan, pesan error, dan status
  klik secara terpisah pada setiap kartu.
- **`useEffect`** mengambil data saat komponen ditampilkan dan membatalkan
  permintaan saat komponen dilepas.
- **Atomic Design** memisahkan atoms, molecules, organisms, templates, dan
  pages agar komponen bisa digunakan ulang.
- **React Router** menyediakan halaman daftar, detail post, navigasi, dan
  halaman tidak ditemukan tanpa memuat ulang aplikasi.
- **Props, spread operator, `map`, dan conditional rendering** mengirim data
  ke kartu serta menampilkan status pemuatan, error, dan hasil pencarian.

## Struktur utama

- `src/Latihan/atoms/`: komponen dasar seperti tombol, kartu, label, dan input.
- `src/Latihan/molecules/`: field pencarian dan kartu post.
- `src/Latihan/organisms/`: grid post.
- `src/Latihan/templates/`: layout bersama dan navigasi.
- `src/Latihan/pages/`: daftar post, detail post, dan halaman tidak ditemukan.
- `src/Latihan/services.js`: fungsi Fetch API untuk mengambil daftar atau detail
  post.

Rute aplikasi: `/posts` untuk daftar, `/posts/:postId` untuk detail, dan `/`
akan diarahkan ke daftar post.
