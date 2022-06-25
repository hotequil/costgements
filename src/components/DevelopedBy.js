import styles from "./DevelopedBy.module.css"

function DevelopedBy({ name }){
  return (
    <span className={styles.smallFont}>Developed by {name}</span>
  )
}

export default DevelopedBy
