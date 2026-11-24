# Post Cards | React JSX & JavaScript ES6

Aplikasi ini mengambil post dari JSONPlaceholder dan menampilkannya dalam grid
kartu responsif. Setiap kartu dapat diklik untuk mengubah warna latar secara
independen; status kartu lain tidak ikut berubah.

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
- **Props, spread operator, dan `map`** mengirimkan data tiap post ke
  `PostCard`.
- **Event handling dan conditional rendering** mengubah warna kartu antara
  `bg-white` dan `bg-blue-100`.
- Kartu dapat diaktifkan dengan klik, Enter, atau Space.

## Struktur utama

- `src/Exercise.jsx`: daftar post dan pemuatan data dengan Hooks.
- `src/PostCard.jsx`: komponen kartu, props, dan interaksi toggle.
- `src/Services.js`: fungsi Fetch API untuk mengambil post.
