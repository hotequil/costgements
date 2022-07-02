import { uniqueId } from "../../helpers/unique-id";
import styles from "./Control.module.css"
import PropTypes from "prop-types";
import { useState } from "react";

export const Input = ({ label, name, placeholder, set, type, inputMode, required, ...props }) => {
  const [id] = useState(uniqueId())
  
  return (
    <div className={styles.container}>
      <label className={`${styles.label} ${required ? styles.labelRequired : ''}`} htmlFor={id}>{label}</label>
      <input id={id}
             className={styles.control}
             placeholder={placeholder}
             type={type}
             inputMode={inputMode}
             name={name}
             onInput={event => set(event.target.value) }
             required={required}
             {...props} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
  props: PropTypes.array,
}

Input.defaultProps = {
  type: "text",
  inputMode: "text",
  required: false,
  props: [],
}
