import { useState } from "react";
import PropTypes from "prop-types";
import { formatAddress } from "./userData.js";

function UserCard({ name, email, street, city, ...rest }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article className="rounded-md bg-white p-4 shadow-sm">
      <h2 className="mb-1 text-sm font-semibold text-gray-800">{name}</h2>
      <p className="text-xs text-gray-600">
        <span>Email:</span> {email}
      </p>
      <p className="text-xs text-gray-600">
        <span>Address:</span> {formatAddress(street, city)}
      </p>
      {Object.entries(rest).map(([key, value]) => (
        <p className="text-xs text-gray-600" key={key}>
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}
      <button
        className={`mt-2 rounded px-2 py-1 text-xs text-white transition-colors ${
          clicked ? "bg-special-green" : "bg-gray-01"
        }`}
        onClick={() => setClicked((wasClicked) => !wasClicked)}
        type="button"
        aria-pressed={clicked}
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
