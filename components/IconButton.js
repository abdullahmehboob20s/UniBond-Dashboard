import styles from "scss/components/IconButton.module.scss";

const IconButton = (props) => {
  const { icon, img, notify = false, children, onClick, ref } = props;

  return (
    <div
      className={`${styles.button} relative`}
      onClick={onClick}
      ref={ref ? ref : null}
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

      {children}
    </div>
  );
};

export default IconButton;
