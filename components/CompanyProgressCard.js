import React from "react";
import styles from "scss/components/CompanyProgressCard.module.scss";

function CompanyProgressCard({
  title,
  subtitle,
  bg = "white",
  icon,
  inWeek,
  textCenter = false,
  subtitleFontSize = "fs-46px",
}) {
  return (
    <div
      className={`${styles.card} ${textCenter ? styles.textCenter : ""}`}
      style={{ backgroundColor: bg }}
    >
      <h2 className="fs-18px black weight-6 lh-1_4">{title}</h2>
      <div className={styles.mainTitleWithIcon}>
        <h1 className={`black weight-8 lh-1 ${subtitleFontSize}`}>
          {subtitle}
        </h1>
        {icon ? <img src={icon} alt="" /> : null}
      </div>
      <p className="gray fs-12px weight-6">{inWeek} New This Week</p>
    </div>
  );
}

export default CompanyProgressCard;
