import PropTypes from "prop-types";

function AtomLabel({ children, className = "", ...props }) {
  return (
    <label
      className={`mb-1 block text-sm font-medium text-secondary ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

AtomLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AtomLabel;
