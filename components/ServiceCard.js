import React from "react";
import styles from "scss/components/ServiceCard.module.scss";

const SkillCard = ({ text }) => {
  return (
    <div className={`${styles.skillCard} gray fs-8px weight-6`}>{text}</div>
  );
};

function ServiceCard({ title, icon, iconClass = "two", fontSize = "fs-30px" }) {
  return (
    <div className={`${styles.card}`}>
      <img src="images/serviceCardBlob.svg" className={styles.blob} alt="" />
      <h1 className={`${fontSize} weight-8 black ${styles.title}`}>{title}</h1>

      <div className={styles.skills}>
        <SkillCard text="Focused Designs" />
        <SkillCard text="Experienced Team" />
        <SkillCard text="User Research" />
      </div>

      <img src={icon} className={`${iconClass}`} alt="" />
    </div>
  );
}

export default ServiceCard;
