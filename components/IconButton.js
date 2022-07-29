import OutsideClickDetector from "hooks/OutsideClickDetector";
import styles from "scss/components/IconButton.module.scss";

const IconButton = (props) => {
  const {
    icon,
    img,
    notify = false,
    children,
    onClick,
    ref,
    className,
  } = props;

  return (
    <div ref={ref ? ref : null} className="relative">
      <div
        className={`${styles.button} ${className} relative`}
        onClick={onClick ? onClick : null}
        disabled={onClick ? false : true}
      >
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

      {children}
    </div>
  );
};

export default IconButton;
