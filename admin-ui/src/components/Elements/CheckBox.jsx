import PropTypes from "prop-types";

function CheckBox({ id, label, name = id }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-secondary" htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-02 accent-primary"
      />
      {label}
    </label>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
};

export default CheckBox;
