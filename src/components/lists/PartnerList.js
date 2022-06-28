import styles from "./PartnerList.module.css"
import PropTypes from "prop-types";
import Partner from "../Partner";
import NotFound from "../messages/NotFound";
import { FaCircle, FaHandshake } from "react-icons/fa";

function PartnerList({ partners }) {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} ${styles.titleBig}`}>Partners <FaHandshake aria-hidden={true} /></h2>

      {
        !partners.length ? <NotFound message="There are no partners" /> :
        <ul className={styles.list}>
          {
            partners.map(({ name, description, since }, index) =>
              <li key={index}><Partner title={name} description={description} since={since}><FaCircle size=".5rem" /></Partner></li>
            )
          }
        </ul>
      }
    </section>
  );
}

PartnerList.propTypes = {
  partners: PropTypes.array.isRequired
}

PartnerList.defaultProps = {
  partners: []
}

export default PartnerList
