import styles from "./Toast.module.css"
import { useEffect } from "react";
import PropTypes from "prop-types";

export const toastType = {
  SUCCESS: "success",
  ERROR: "error",
}

const TIME_AFTER_SHOW = 4000

const defaultObject = {
  message: "",
  type: toastType.SUCCESS,
}

export const generateToast = (message = defaultObject.message, type = defaultObject.type, onEnded = null) => {
  const timeoutId = setTimeout(() => {
    onEnded?.()

    clearTimeout(timeoutId)
  }, TIME_AFTER_SHOW)

  return { message, type }
}

export const Toast = ({ message, type, set }) => {
  useEffect(() => {
    if(!message) return

    const timeoutId = setTimeout(() => {
      set(generateToast())

      clearTimeout(timeoutId)
    }, TIME_AFTER_SHOW)
  }, [message, set])

  return (<>{!!message && <p role="alert" className={`${styles.toast} ${styles[type]}`}>{message}</p>}</>)
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

Toast.defaultTypes = defaultObject
