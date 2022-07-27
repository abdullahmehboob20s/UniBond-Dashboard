import React from "react";
import styles from "scss/components/SidebarHeader.module.scss";
import IconButton from "./IconButton";

function SidebarHeader() {
  return (
    <div className={styles.wrapper}>
      <IconButton icon="images/icons/moonIcon.svg" />
      <IconButton icon="images/icons/commentsIcon.svg" />
      <IconButton icon="images/icons/BellIcon.svg" notify={true} />
      <IconButton img="images/peoples/user.png" />
    </div>
  );
}

export default SidebarHeader;
