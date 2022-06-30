import styles from "./NewProject.module.css"
import { Input } from "../../components/forms/Input";
import { useState } from "react";
import { Button, buttonTypes, layoutTypes } from "../../components/actions/Button";
import { Select } from "../../components/forms/Select";

export const NewProject = () => {
  const [name, setName] = useState(null);
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState(null);
  const categories = ["Ecommerce", "Crowdfunding", "CRM", "ERP"]
  const submit = event => event.preventDefault()

  return (
    <form className={`form ${styles.form}`} onSubmit={submit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">New project</legend>
        <Input name="name" set={setName} label="Name" placeholder="Set name" required={true} />
        <Input name="budget" type="number" inputMode="decimal" set={setBudget} label="Budget" placeholder="Set budget" required={true} />
        <Select label="Category" set={setCategory} value={category} name="category" required={true} options={categories} />
        <div className="form__actions">
          <Button isOutline={true} layoutType={layoutTypes.LINK} to="/projects">Back</Button>
          <Button layoutType={layoutTypes.BUTTON} buttonType={buttonTypes.SUBMIT} disabled={!category || !name || budget <= 0}>Create</Button>
        </div>
      </fieldset>
    </form>
  )
}
