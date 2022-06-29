import { uniqueId } from "../../helpers/unique-id";
import styles from "./Input.module.css"
import PropTypes from "prop-types";
import { useState } from "react";

export const Input = ({ label, name, placeholder, set, type, inputMode, required }) => {
  const [id] = useState(uniqueId())
  
  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${required ? styles.labelRequired : ''}`} htmlFor={id}>{label}</label>
      <input id={id}
             className={styles.input}
             placeholder={placeholder}
             type={type}
             inputMode={inputMode}
             name={name}
             onInput={event => set(event.target.value) }
             required={required} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
}

Input.defaultProps = {
  type: "text",
  inputMode: "text",
  required: false,
}
