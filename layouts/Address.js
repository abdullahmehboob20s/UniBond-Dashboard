import React from "react";
import styles from "scss/layout/Address.module.scss";

function Address() {
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={styles.mapWrapper}>
          <img src="images/map.png" className={styles.map} alt="" />
        </div>

        <div className={styles.location}>
          <img
            src="images/icons/location-icon.svg"
            className={styles.locationIcon}
            alt=""
          />

          <p className="white fs-20px lh-1_4 weight-7">
            Sheikh Mohammed Bin Rashed Boulevard Downtown Dubai, P.O. Box 31166,
            Dubai, UAE
          </p>
        </div>
      </main>
    </div>
  );
}

export default Address;
