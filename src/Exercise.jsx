import { useEffect, useState } from "react";
import UserCard from "./UserCard.jsx";
import initialUsers, { fetchUsers } from "./userData.js";

function Exercise() {
  const [users, setUsers] = useState(initialUsers);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const loadedUsers = await fetchUsers(controller.signal);
        setUsers(loadedUsers);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Data pengguna gagal dimuat. Silakan coba lagi.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-special-mainBg px-4 py-8">
      <section
        aria-labelledby="users-heading"
        className="mx-auto max-w-3xl"
      >
        <h1
          className="mb-4 text-center text-2xl font-bold text-blue-700"
          id="users-heading"
        >
          User Cards
        </h1>

        {isLoading && (
          <p className="text-center text-sm text-gray-600" role="status">
            Memuat data pengguna...
          </p>
        )}
        {errorMessage && (
          <p className="text-center text-sm text-special-red" role="alert">
            {errorMessage}
          </p>
        )}
        <div aria-busy={isLoading} className="grid gap-4 sm:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.email} {...user} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Exercise;
