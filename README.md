# Latihan React JSX dan JavaScript ES6

Aplikasi ini menampilkan kartu pengguna sebagai latihan JSX, fitur ES6, dan
React Hooks. Data contoh tetap ditampilkan saat aplikasi sedang mengambil data
dari JSONPlaceholder; jika permintaan gagal, pesan error ditampilkan dan data
contoh tetap tersedia.

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

- **Spread operator** meneruskan properti pengguna ke komponen kartu dengan
  `<UserCard {...user} />`.
- **Rest parameter** mengumpulkan bagian alamat di `formatAddress(...parts)`;
  object rest di `UserCard` menerima properti tambahan.
- **Object property shorthand** digunakan saat membentuk objek pengguna.
- **Array methods** (`map`, `filter`, dan `Object.entries`) membentuk daftar
  kartu, alamat, dan properti tambahan.
- **Promise dan async/await** digunakan untuk mengambil serta mengolah data
  pengguna.
- **Default dan named export** dipakai untuk membagikan data contoh dan fungsi
  dari `userData.js`.
- **`useState`** mengelola daftar pengguna, status pemuatan, pesan error, dan
  status tombol kartu.
- **`useEffect`** memuat data saat komponen ditampilkan dan membatalkan
  permintaan ketika komponen dilepas.

## Struktur utama

- `src/Exercise.jsx`: daftar pengguna dan pemuatan data dengan Hooks.
- `src/UserCard.jsx`: komponen kartu, props, dan state tombol.
- `src/userData.js`: data contoh, fungsi format alamat, dan pengambilan data.
