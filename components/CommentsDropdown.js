import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import styles from "scss/components/CommentsDropdown.module.scss";
import IconButton from "./IconButton";

const UserCard = ({ img, title, notify, notficationCount }) => {
  return (
    <div className={styles.userCard}>
      <IconButton img={img} notify={notify} />
      <p className={`${styles.usercardTitle} white weight-7`}>{title}</p>
      {notficationCount ? (
        <p className={`${styles.commentNumber} gray weight-5`}>
          ({notficationCount})
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

function CommentsDropdown(props) {
  const [stateValue, stateSetter] = props.state;
  const dropdownRef = OutsideClickDetector(() => stateSetter(false));

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={dropdownRef}
    >
      <UserCard
        img="images/icons/userIcon.png"
        title="James Green"
        notify={true}
        notficationCount={3}
      />
      <UserCard
        img="images/icons/userIcon.png"
        title="Carmen Lewis"
        notify={true}
      />
      <UserCard
        img="images/icons/userIcon.png"
        title="Michael Richard"
        notify={false}
      />
      <UserCard
        img="images/icons/userIcon.png"
        title="Nicole James"
        notify={false}
      />
    </div>
  );
}

export default CommentsDropdown;
