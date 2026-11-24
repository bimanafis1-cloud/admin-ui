import PropTypes from "prop-types";

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-teal-700",
    secondary: "border border-gray-05 bg-white text-defaultBlack hover:bg-gray-06",
  };

  return (
    <button
      type={type}
      className={`flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};

export default Button;
