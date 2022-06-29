import styles from "./NewProject.module.css"

export const NewProject = () => {
  return (
    <form className={`form ${styles.form}`}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">New project</legend>
      </fieldset>
    </form>
  )
}
