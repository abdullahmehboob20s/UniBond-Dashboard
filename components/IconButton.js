import React from "react";
import styles from "scss/components/IconButton.module.scss";

const IconButton = ({ icon, img, notify = false }) => {
  return (
    <div className={`${styles.button}`}>
      {icon ? (
        <div className={styles.iconWrap}>
          {notify ? <div className={styles.notficationCircle}></div> : ""}
          <img src={icon} alt="" />
        </div>
      ) : (
        <>
          {notify ? <div className={styles.notficationCircle}></div> : ""}
          <img src={img} alt="" />
        </>
      )}
    </div>
  );
};

export default IconButton;
