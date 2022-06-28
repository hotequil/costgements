import { Button, layoutTypes } from "./actions/Button";

function HelloGuys(){
  return (
    <div className="center-content-home">
      <h1 className="no-margin text-align-center font-title-home">Hello guys, welcome to the costgements!</h1>
      <Button layoutType={layoutTypes.LINK} to="/projects/new">Create a new project</Button>
    </div>
  )
}

export default HelloGuys
