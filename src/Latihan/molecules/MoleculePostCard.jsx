import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AtomButton from "../atoms/AtomButton.jsx";
import AtomCard from "../atoms/AtomCard.jsx";

function MoleculePostCard({ body, id, title }) {
  const [selected, setSelected] = useState(false);

  return (
    <AtomCard
      as="article"
      className={`flex h-full flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        selected ? "border-primary bg-special-bg2" : ""
      }`}
    >
      <button
        aria-pressed={selected}
        className="flex-1 rounded text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={() => setSelected((wasSelected) => !wasSelected)}
        type="button"
      >
        <h2 className="mb-2 text-sm font-semibold text-defaultBlack">{title}</h2>
        <p className="text-sm leading-relaxed text-secondary">{body}</p>
        <span className="sr-only">
          {selected ? "Tandai post belum dipilih" : "Tandai post dipilih"}
        </span>
      </button>
      {Number.isInteger(id) && (
        <AtomButton as={Link} to={`/posts/${id}`}>
          Lihat detail
        </AtomButton>
      )}
    </AtomCard>
  );
}

MoleculePostCard.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default MoleculePostCard;
