import styles from "./Toast.module.css"
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FINISHED_TIMEOUT_NUMBER } from "../../../helpers/manipulate";

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
  const [timeoutId, setTimeoutId] = useState(FINISHED_TIMEOUT_NUMBER)

  useEffect(() => {
    if(!message || timeoutId !== FINISHED_TIMEOUT_NUMBER) return

    setTimeoutId(
      setTimeout(() => {
        set(generateToast())

        clearTimeout(timeoutId)
        setTimeoutId(FINISHED_TIMEOUT_NUMBER)
      }, TIME_AFTER_SHOW)
    )
  }, [message, set, timeoutId])

  return (<>{!!message && <p role="alert" className={`${styles.toast} ${styles[type]}`}>{message}</p>}</>)
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
}

Toast.defaultTypes = defaultObject
