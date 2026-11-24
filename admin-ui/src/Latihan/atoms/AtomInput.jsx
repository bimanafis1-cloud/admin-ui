import PropTypes from "prop-types";

function AtomInput({ className = "", type = "text", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-02 bg-white px-3 py-2 text-sm text-defaultBlack outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      type={type}
      {...props}
    />
  );
}

AtomInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default AtomInput;
