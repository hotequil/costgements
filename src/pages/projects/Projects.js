import { Button, layoutTypes } from "../../components/actions/Button";
import styles from "./Projects.module.css"

function Projects(){
  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <Button layoutType={layoutTypes.LINK} to="/projects/new">New project</Button>
      </div>
    </section>
  )
}

export default Projects
