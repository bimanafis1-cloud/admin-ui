import PropTypes from "prop-types";

function LabeledInput({
  id,
  label,
  type = "text",
  placeholder = "",
  autoComplete,
  required = true,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-secondary" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-md border border-gray-02 bg-white px-3 py-2.5 text-sm text-defaultBlack outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

LabeledInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
};

export default LabeledInput;
