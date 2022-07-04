import PropTypes from "prop-types";
import { NewService } from "./NewService";
import { generateToast, Toast, toastType } from "../../../components/global/toast/Toast";
import { useState } from "react";
import { Projects } from "../../../services/projects";
import { uniqueId } from "../../../helpers/unique-id";
import styles from "./ServicesList.module.css";
import { copy } from "../../../helpers/manipulate";

const projectService = new Projects()

export const ServicesList = ({ project, setProject }) => {
  const [projectCopy, setProjectCopy] = useState(copy(project))
  const [toast, setToast] = useState(generateToast())
  const [name, setName] = useState("")
  const [saving, setSaving] = useState(false)

  const submit = async event => {
    event.preventDefault()

    setSaving(true)

    try{
      const services = [...projectCopy.services, { id: uniqueId(), name }]
      const response = await projectService.update({ ...projectCopy, services })

      setProjectCopy(response)
      setProject(response)
      setName("")
      setToast(generateToast("Created new service", toastType.SUCCESS))
    } catch(error){
      console.error(error)

      setToast(generateToast("Error on create service", toastType.ERROR))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className={styles.container}>
      <Toast {...toast} set={setToast} />
      <NewService submit={submit} name={name} setName={setName} saving={saving} project={projectCopy} />
      <div>TODO SERVICES LIST</div>
    </div>
  )
}

ServicesList.propTypes = {
  project: PropTypes.object.isRequired,
  setProject: PropTypes.func.isRequired,
}
