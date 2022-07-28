import Address from "layouts/Address";
import DashboardLayout from "layouts/DashboardLayout";
import styles from "scss/pages/address.module.scss";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactCard from "components/ContactCard";

export default function AddressPage() {
  return (
    <div className={styles.page}>
      <DashboardLayout showSidebar={false}>
        <Address />
      </DashboardLayout>

      <div className={styles.contactDetailsWrapper}>
        <div className={styles.contactDetails}>
          <img src="images/cities.png" className={styles.cities} alt="" />
          <div className={styles.cards}>
            <ContactCard icon={<IoMdCall />} title="+971-4-4388222" />
            <ContactCard icon={<FaWhatsapp />} title="+971-4-4388222" />
            <ContactCard icon={<MdEmail />} title="team@uni.bond" />
          </div>
        </div>
        <div className={styles.places}>
          <div>
            <img
              src="images/cities/city1.png"
              className={styles.place1}
              alt=""
            />
          </div>
          <div>
            <img
              src="images/cities/city2.png"
              className={styles.place2}
              alt=""
            />
          </div>
          <div>
            <img
              src="images/cities/city3.png"
              className={styles.place3}
              alt=""
            />
          </div>
          <div>
            <img
              src="images/cities/city4.png"
              className={styles.place4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
