import PropTypes from "prop-types";

function Logo({ className = "" }) {
  return (
    <div
      aria-label="April"
      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white shadow-md ${className}`}
    >
      A
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
