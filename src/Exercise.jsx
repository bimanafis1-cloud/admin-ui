import UserCard from "./UserCard.jsx";

const users = [
  {
    name: "April",
    email: "april@gmail.com",
    street: "Jl. Imam Bonjol",
    city: "Semarang",
  },
  {
    name: "Yani",
    email: "yani@gmail.com",
    street: "Jl. Indraprasta",
    city: "Ungaran",
  },
  {
    name: "Safitri",
    email: "safitri@gmail.com",
    street: "Jl. Pemuda",
    city: "Kendal",
  },
];

function Exercise() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        User Cards
      </h1>
      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map(({ name, email, street, city }) => (
          <UserCard
            key={email}
            name={name}
            email={email}
            street={street}
            city={city}
          />
        ))}
      </section>
    </main>
  );
}

export default Exercise;