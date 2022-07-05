import PropTypes from "prop-types";
import { NewService } from "./NewService";
import { generateToast, Toast, toastType } from "../../../components/global/toast/Toast";
import { useEffect, useState } from "react";
import { Projects } from "../../../services/projects";
import { uniqueId } from "../../../helpers/unique-id";
import styles from "./ServicesList.module.css";
import { copy } from "../../../helpers/manipulate";
import NotFound from "../../../components/messages/NotFound";
import { ServiceCard } from "./ServiceCard";

const projectService = new Projects()

export const ServicesList = ({ project, setProject }) => {
  const [projectCopy, setProjectCopy] = useState(copy(project))
  const [toast, setToast] = useState(generateToast())
  const [name, setName] = useState("")
  const [saving, setSaving] = useState(false)
  const [services, setServices] = useState([])
  const [removeList, setRemoveList] = useState([])

  const setProjects = project => {
    setProjectCopy(project)
    setProject(project)
  }

  const submit = async event => {
    event.preventDefault()

    setSaving(true)

    try{
      const services = [...projectCopy.services, { id: uniqueId(), name }]
      const response = await projectService.update({ ...projectCopy, services })

      setProjects(response)
      setName("")
      setToast(generateToast("Created new service", toastType.SUCCESS))
    } catch(error){
      console.error(error)

      setToast(generateToast("Error on create service", toastType.ERROR))
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id, name) => {
    setRemoveList([...removeList, id])

    try{
      const response = await projectService.update({
        ...projectCopy,
        services: projectCopy.services.filter(service => service.id !== id)
      })

      setProjects(response)
      setToast(generateToast(`Removed ${name} service`, toastType.SUCCESS))
    } catch(error){
      console.error(error)

      setToast(generateToast(`Error on remove ${name} service`, toastType.ERROR))
    } finally {
      setRemoveList(removeList.filter(itemId => itemId !== id))
    }
  }

  useEffect(() => {
    setServices(projectCopy.services)
  }, [projectCopy])

  return (
    <div className={styles.container}>
      <Toast {...toast} set={setToast} />
      <NewService submit={submit} name={name} setName={setName} saving={saving} project={projectCopy} />
      <h3 className={styles.title}>Services</h3>
      <ul className={services.length ? styles.list : `${styles.list} ${styles.listNotFound}`}>
        {
          !services.length ?
          <NotFound message="There are no services" /> :
          services.map(({ id, name }) =>
            <li key={id}>
              <ServiceCard onRemove={remove.bind(null, id, name)}
                           removing={removeList.includes(id)}
                           name={name} />
            </li>
          )
        }
      </ul>
    </div>
  )
}

ServicesList.propTypes = {
  project: PropTypes.object.isRequired,
  setProject: PropTypes.func.isRequired,
}
