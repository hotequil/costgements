import styles from "./Partner.module.css"
import PropTypes from "prop-types";

function Partner({ title, description, since }){
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{ title }</h2>
      <p className={styles.description}>{ description }</p>
      <p className={styles.since}>Since { since }</p>
    </article>
  )
}

Partner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  since: PropTypes.number.isRequired,
}

export default Partner
