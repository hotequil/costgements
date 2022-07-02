import { Button, layoutTypes } from "../../components/actions/Button";
import styles from "./Projects.module.css"
import { Loader } from "../../components/global/loader/Loader";
import { useEffect, useState } from "react";
import NotFound from "../../components/messages/NotFound";
import { Projects as ProjectsService } from "../../services/projects"
import { ProjectCard } from "./ProjectCard";
import { generateToast, Toast, toastType } from "../../components/global/toast/Toast";

const projectsService = new ProjectsService()

function Projects(){
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])
  const [toast, setToast] = useState(generateToast())

  const get = async () => {
    setLoading(true)

    try{
      const response = await projectsService.get()

      setProjects(response)
    } catch(error){
      setToast(generateToast("Request error", toastType.ERROR))
    } finally {
      setLoading(false)
    }
  }

  const onDelete = (currentProjectId, succeed) => {
    const currentProject = projects.find(({ id }) => id === currentProjectId)

    setToast(generateToast(
      `${currentProject.name} ${succeed ? "was" : "wasn't"} deleted`,
      succeed ? toastType.SUCCESS : toastType.ERROR
    ))

    if(succeed) setProjects(projects.filter(({ id }) => id !== currentProjectId))
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <section className={styles.card}>
      <Toast {...toast} set={setToast} />
      <div className={styles.head}>
        <h2 className={styles.title}>Projects</h2>
        <Button layoutType={layoutTypes.LINK} to="/projects/new">New project</Button>
      </div>
      {
        loading ?
        <Loader show={loading} size="2rem" /> :
        !projects.length ?
        <NotFound message="There are no projects" /> :
        <ul className={styles.grid}>
          {
            projects.map(project =>
              <li key={project.id}>
                <ProjectCard id={project.id}
                             name={project.name}
                             budget={project.budget}
                             category={project.category}
                             services={project.services}
                             onDelete={onDelete} />
              </li>
            )
          }
        </ul>
      }
    </section>
  )
}

export default Projects
