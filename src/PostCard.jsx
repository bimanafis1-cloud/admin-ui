import { useState } from "react";
import PropTypes from "prop-types";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setClicked((wasClicked) => !wasClicked);
    }
  }

  return (
    <article
      aria-pressed={clicked}
      className={`cursor-pointer rounded-md p-4 shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => setClicked((wasClicked) => !wasClicked)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <h2 className="mb-2 text-sm font-semibold text-gray-800">{title}</h2>
      <p className="text-xs leading-relaxed text-gray-600">{body}</p>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
