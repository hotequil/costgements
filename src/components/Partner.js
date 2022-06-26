import styles from "./Partner.module.css"

function Partner(){
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>Name</h2>
      <p className={styles.description}>Description</p>
      <p className={styles.since}>Since 2014</p>
    </article>
  )
}

export default Partner
