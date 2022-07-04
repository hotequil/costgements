import PropTypes from "prop-types";
import { Input } from "../../../components/forms/Input";
import { Button, buttonTypes, layoutTypes } from "../../../components/actions/Button";
import { Loader, loaderColors } from "../../../components/global/loader/Loader";

export const NewService = ({ submit, saving, name, setName, project }) => {
  return (
    <form className="form" onSubmit={submit} name="formService">
      <fieldset className="form__fieldset">
        <legend className="form__legend">New service in {project.name}</legend>
        <Input name="name" set={setName} label="Name" placeholder="Set name" required={true} value={name} />
        <div className="form__actions">
          <Button layoutType={layoutTypes.BUTTON}
                  buttonType={buttonTypes.SUBMIT}
                  disabled={saving || !name}>
            { (saving && <Loader show={saving} color={loaderColors.WHITE} />) || "Create" }
          </Button>
        </div>
      </fieldset>
    </form>
  )
}

NewService.propTypes = {
  submit: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
}
