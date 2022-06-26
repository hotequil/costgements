import styles from "./DevelopedBy.module.css"

function DevelopedBy({ name }){
  return (
    <>
      <span className={styles.smallFont}>Developed by {name}</span>&nbsp;<span className={styles.copy}>(copryright &copy;)</span>
    </>
  )
}

export default DevelopedBy
