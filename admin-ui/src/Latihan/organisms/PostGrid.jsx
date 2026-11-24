import PropTypes from "prop-types";
import MoleculePostCard from "../molecules/MoleculePostCard.jsx";

function PostGrid({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-gray-05 bg-white px-4 py-10 text-center">
        <p className="text-sm text-secondary">
          Tidak ada post yang cocok dengan pencarian.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <MoleculePostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PostGrid;
