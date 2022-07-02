import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { generateToast, Toast, toastType } from "../../components/global/toast/Toast";
import { Projects } from "../../services/projects";
import { Loader, loaderColors } from "../../components/global/loader/Loader";
import styles from "./EditProject.module.css"
import NotFound from "../../components/messages/NotFound";
import { Button, buttonTypes, layoutTypes } from "../../components/actions/Button";
import { Input } from "../../components/forms/Input";
import { Select } from "../../components/forms/Select";
import { Categories } from "../../services/categories";

const projectService = new Projects()
const categoriesService = new Categories()

export const EditProject = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [projectToEdit, setProjectToEdit] = useState(null)
  const [toast, setToast] = useState(generateToast())
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState([])
  const changeProjectToEdit = (key, value) => setProjectToEdit({ ...projectToEdit, [key]: value })
  const navigate = useNavigate()
  const showContent = !loading && !!project

  const setAllProject = projectItem => {
    setProject(projectItem)
    setProjectToEdit(projectItem)
  }

  const submit = async event => {
    event.preventDefault()

    setSaving(true)

    try{
      const response = await projectService.update(projectToEdit)

      setAllProject(response)
      setToast(generateToast("Updated project", toastType.SUCCESS))
    } catch(error){
      console.error(error)

      setToast(generateToast("Error on update project", toastType.ERROR))
    } finally{
      setSaving(false)
    }
  }

  useEffect(() => {
    const get = async () => {
      setLoading(true)

      try{
        const response = await projectService.single(id)

        setAllProject(response)
      } catch(error){
        console.log(error)

        setToast(generateToast("Error to get project", toastType.ERROR, () => navigate('/projects')))
      } finally {
        setLoading(false)
      }
    }

    return () => {
      categoriesService.get().then(setCategories)

      get().then()
    }
  }, [id])

  return (
    <div className={styles.container}>
      <Toast {...toast} set={setToast} />

      <Loader size="2rem" show={loading} />

      { !loading && !project && <NotFound message="Project id doesn't exist" /> }

      {
        showContent &&
        <form className="form" onSubmit={submit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Edit {project.name} project</legend>

            <Input value={projectToEdit.name}
                   name="name"
                   set={changeProjectToEdit.bind(this, "name")}
                   label="Name"
                   placeholder="Set name"
                   required={true} />

            <Input value={projectToEdit.budget}
                   name="budget"
                   type="number"
                   inputMode="decimal"
                   set={changeProjectToEdit.bind(this, "budget")}
                   label="Budget"
                   placeholder="Set budget"
                   required={true} />

            <Select value={projectToEdit.category}
                    label="Category"
                    set={changeProjectToEdit.bind(this, "category")}
                    name="category"
                    required={true}
                    options={categories} />

            <div className="form__actions">
              <Button isOutline layoutType={layoutTypes.LINK} to="/projects">Back</Button>
              <Button layoutType={layoutTypes.BUTTON}
                      buttonType={buttonTypes.SUBMIT}
                      disabled={saving || !projectToEdit?.category || !projectToEdit?.name || !projectToEdit?.budget || projectToEdit?.budget <= 0}>
                { (saving && <Loader show={saving} color={loaderColors.WHITE} />) || "Save" }
              </Button>
            </div>
          </fieldset>
        </form>
      }

      { showContent && <div className={styles.services}>TODO SERVICES CRUD</div> }
    </div>
  )
}
