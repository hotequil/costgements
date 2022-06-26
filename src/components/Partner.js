import styles from "./Partner.module.css"
import PropTypes from "prop-types";
import { useState } from "react";

function Partner({ title, description, since }){
  const alertTitle = () => alert(`Title: ${title}`);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{ title }</h2>
      <p className={expanded ? styles.descriptionExpanded : styles.description}>{description}</p>
      <button onClick={setExpanded.bind(this, !expanded)} className="link">{expanded ? 'See less' : 'See more'}</button>
      <p className={styles.since}>Since { since }</p>
      <button className={styles.alert} onClick={alertTitle}>Show alert</button>
    </article>
  )
}

Partner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  since: PropTypes.number.isRequired,
}

Partner.defaultProps = {
  title: "set title",
  description: "set description",
  since: "set since",
}

export default Partner