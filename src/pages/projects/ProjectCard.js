import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css"
import { Button, buttonTypes, layoutTypes } from "../../components/actions/Button";
import { money } from "../../helpers/format";
import { Projects } from "../../services/projects";
import { useState } from "react";
import { Loader } from "../../components/global/loader/Loader";

const projectsService = new Projects()

export const ProjectCard = ({ id, name, budget, category, services, onDelete }) => {
  const [deleteLoading, setDeleteLoading] = useState(false)

  const infos = [
    `Budget: ${money(budget)}`,
    `Category: ${category}`,
    `Services quantity: ${services.length}`,
  ]

  const deleteProject = async () => {
    setDeleteLoading(true)

    try{
      await projectsService.delete(id)

      onDelete(id, true)
    } catch(error){
      console.error(error)

      onDelete(id, false)
    } finally {
      setDeleteLoading(false)
    }
  }

  return (
    <article className={styles.card}>
      <h3 className={`${styles.title} ellipsis one-line`}>{name}</h3>

      { infos.map((info, index) => <p key={index} className={styles.text}>{info}</p>) }

      <div className={styles.actions}>
        <Button layoutType={layoutTypes.LINK} to={`/projects/${id}`}>Edit</Button>
        <Button layoutType={layoutTypes.BUTTON}
                buttonType={buttonTypes.BUTTON}
                isOutline
                click={deleteProject}>
          { (deleteLoading && <Loader show={deleteLoading} />) || "Delete" }
        </Button>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}
