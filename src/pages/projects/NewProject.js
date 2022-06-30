import styles from "./NewProject.module.css"
import { Input } from "../../components/forms/Input";
import { useState } from "react";
import { Button, buttonTypes, layoutTypes } from "../../components/actions/Button";

export const NewProject = () => {
  const [, setName] = useState(null);
  const submit = event => event.preventDefault()

  return (
    <form className={`form ${styles.form}`} onSubmit={submit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">New project</legend>
        <Input name="name" set={setName} label="Name" placeholder="Set name" required={true} />
        <div className="form__actions">
          <Button isOutline={true} layoutType={layoutTypes.LINK} to="/projects">Back</Button>
          <Button layoutType={layoutTypes.BUTTON} buttonType={buttonTypes.SUBMIT}>Create</Button>
        </div>
      </fieldset>
    </form>
  )
}
