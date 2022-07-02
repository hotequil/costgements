import { uniqueId } from "../../helpers/unique-id";
import styles from "./Control.module.css"
import PropTypes from "prop-types";
import { useState } from "react";

export const Select = ({ label, name, options, value, set, required }) => {
  const [id] = useState(uniqueId())

  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${required ? styles.labelRequired : ''}`} htmlFor={id}>{label}</label>
      <select name={name} className={styles.control} id={id} required={required} onChange={event => set(event.target.value)}>
        <option value={null} selected={!value} disabled={!!value && required}>None</option>
        { options.map((option, index) => <option key={index} value={option} selected={option === value}>{option}</option>) }
      </select>
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  set: PropTypes.func.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
}

Select.defaultProps = {
  required: false,
  value: null,
}
