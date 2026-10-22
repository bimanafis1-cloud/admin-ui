import { useState } from "react";
import PropTypes from "prop-types";

function UserCard({ name, email, street, city }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>
      <button
        className={`${clicked ? "bg-special-green" : "bg-gray-01"} mt-4 rounded-md p-2 text-white transition-colors`}
        onClick={() => setClicked(true)}
        type="button"
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </article>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default UserCard;
