import styles from "./NewProject.module.css"
import { Input } from "../../components/forms/Input";
import { useEffect, useState } from "react";
import { Button, buttonTypes, layoutTypes } from "../../components/actions/Button";
import { Select } from "../../components/forms/Select";
import { Categories } from "../../services/categories";
import { useNavigate } from "react-router-dom";
import { Projects } from "../../services/projects";
import { generateToast, Toast, toastType } from "../../components/global/toast/Toast";

const categoriesService = new Categories();
const projectsService = new Projects()

export const NewProject = () => {
  const [name, setName] = useState(null);
  const [budget, setBudget] = useState(0);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [toast, setToast] = useState(generateToast())

  const submit = async event => {
    event.preventDefault()

    setLoading(true)

    try{
      await projectsService.create({ name, budget, category })

      setToast(generateToast(
        "Project created with success",
        toastType.SUCCESS,
        () => {
          navigate('/projects')
          setLoading(false)
        }
      ))
    } catch(error){
      console.error(error)

      setToast(generateToast("An error has occurred", toastType.ERROR))
      setLoading(false)
    }
  }

  useEffect(() => {
    categoriesService.get().then(setCategories)
  }, [])

  return (
    <form className={`form ${styles.form}`} onSubmit={submit}>
      <Toast {...toast} set={setToast} />
      <fieldset className="form__fieldset">
        <legend className="form__legend">New project</legend>
        <Input name="name" set={setName} label="Name" placeholder="Set name" required={true} />
        <Input name="budget" type="number" inputMode="decimal" set={setBudget} label="Budget" placeholder="Set budget" required={true} />
        <Select label="Category" set={setCategory} value={category} name="category" required={true} options={categories} />
        <div className="form__actions">
          <Button isOutline={true} layoutType={layoutTypes.LINK} to="/projects">Back</Button>
          <Button layoutType={layoutTypes.BUTTON} buttonType={buttonTypes.SUBMIT} disabled={loading || !category || !name || budget <= 0}>Create</Button>
        </div>
      </fieldset>
    </form>
  )
}
