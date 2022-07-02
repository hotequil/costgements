import { FaSpinner } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./Loader.module.css"

export const loaderColors = {
  YELLOW: "yellow",
  BLACK: "black",
  WHITE: "white",
}

export const Loader = ({ show, color, size }) => {
  if(!Object.values(loaderColors).includes(color)) color = loaderColors.BLACK

  return <>{show && <FaSpinner size={size} className={`${styles.loader} ${styles[color]}`} aria-label="Loading active"/>}</>
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.any,
}

Loader.defaultTypes = {
  show: false,
  color: loaderColors.BLACK,
  size: null,
}
