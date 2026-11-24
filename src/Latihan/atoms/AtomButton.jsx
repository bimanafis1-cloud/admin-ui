import PropTypes from "prop-types";

function AtomButton({
  as: Component = "button",
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <Component
      className={`rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...(Component === "button" ? { type } : {})}
      {...props}
    >
      {children}
    </Component>
  );
}

AtomButton.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default AtomButton;
