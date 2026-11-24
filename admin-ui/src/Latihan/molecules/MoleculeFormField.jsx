import PropTypes from "prop-types";
import AtomInput from "../atoms/AtomInput.jsx";
import AtomLabel from "../atoms/AtomLabel.jsx";

function MoleculeFormField({
  id,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}) {
  return (
    <div>
      <AtomLabel htmlFor={id}>{label}</AtomLabel>
      <AtomInput
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}

MoleculeFormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default MoleculeFormField;
