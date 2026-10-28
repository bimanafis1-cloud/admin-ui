function createUser(name, email, street, city) {
  return { name, email, street, city };
}

const initialUsers = [
  createUser("April", "april@gmail.com", "Jl. Imam Bonjol", "Semarang"),
  createUser("Yani", "yani@gmail.com", "Jl. Indraprasta", "Ungaran"),
  createUser("Safitri", "safitri@gmail.com", "Jl. Pemuda", "Kendal"),
];

export async function fetchUsers(signal) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Gagal mengambil data pengguna (${response.status}).`);
  }

  const users = await response.json();

  return users.map(({ name, email, address }) => ({
    name,
    email,
    street: address.street,
    city: address.city,
  }));
}

export function formatAddress(...parts) {
  return parts.filter(Boolean).join(", ");
}

export default initialUsers;
