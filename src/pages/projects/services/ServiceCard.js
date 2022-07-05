import PropTypes from "prop-types";
import { Button, buttonTypes, layoutTypes } from "../../../components/actions/Button";
import { Loader, loaderColors } from "../../../components/global/loader/Loader";
import styles from "./ServiceCard.module.css"

export const ServiceCard = ({ name, removing, onRemove }) => {
  return (
    <article className={styles.card}>
      <h4 className={`ellipsis one-line no-margin text-align-center ${styles.title}`}>{name}</h4>
      <Button layoutType={layoutTypes.BUTTON}
              buttonType={buttonTypes.BUTTON}
              isOutline
              click={onRemove}
              disabled={removing}>
        { (removing && <Loader show={removing} color={loaderColors.WHITE} />) || "Remove" }
      </Button>
    </article>
  )
}

ServiceCard.propTypes = {
  removing: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}
