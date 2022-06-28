import { Button, layoutTypes } from "../components/actions/Button";

function Projects(){
  return <Button layoutType={layoutTypes.LINK} to="/projects/new">New project</Button>
}

export default Projects
