import styles from "./NewProject.module.css"
import { Input } from "../../components/forms/Input";
import { useState } from "react";
import { Button, layoutTypes } from "../../components/actions/Button";

export const NewProject = () => {
  const [, setName] = useState(null);

  return (
    <form className={`form ${styles.form}`}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">New project</legend>
        <Input name="name" set={setName} label="Name" placeholder="Set name" required={true} />
        <Button layoutType={layoutTypes.LINK} to="/projects">Back</Button>
      </fieldset>
    </form>
  )
}
