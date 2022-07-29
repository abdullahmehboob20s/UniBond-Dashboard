import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/components/CompanyProgressCard.module.scss";

function CompanyProgressCard({
  title,
  subtitle,
  bg = "white",
  iconWidth,
  icon,
  inWeek,
  textCenter = false,
  subtitleFontSize = "fs-46px",
  className,
  flipCard = false,
}) {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  return (
    <div className={styles.cardWrapper}>
      <div
        className={`${styles.card}  ${
          textCenter ? styles.textCenter : ""
        } ${className} ${flipCard ? styles.flipCard : ""}`}
        style={{ backgroundColor: bg }}
      >
        <h2
          className={`${
            isBellow1024px ? "fs-14px" : "fs-18px"
          } black weight-6 lh-1_4`}
        >
          {title}
        </h2>
        <div className={styles.mainTitleWithIcon}>
          <h1 className={`black weight-8 lh-1 ${subtitleFontSize}`}>
            {subtitle}
          </h1>
          {icon ? (
            <img
              src={icon}
              style={{ width: iconWidth }}
              className={styles.icon}
              alt=""
            />
          ) : null}
        </div>
        <p className="gray fs-12px weight-6">{inWeek} New This Week</p>
      </div>

      {flipCard ? <div className={styles.backwardCard}></div> : ""}
    </div>
  );
}

export default CompanyProgressCard;
