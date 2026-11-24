import PropTypes from "prop-types";

function AtomCard({ as: Component = "div", children, className = "", ...props }) {
  return (
    <Component
      className={`rounded-lg border border-gray-05 bg-white p-5 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

AtomCard.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AtomCard;
