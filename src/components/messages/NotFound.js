import PropTypes from "prop-types";
import styles from "./NotFound.module.css"

function NotFound({ message }){
  return <span role="alert" className={styles.message}>{message}</span>
}

NotFound.propTypes = { message: PropTypes.string.isRequired }

export default NotFound
