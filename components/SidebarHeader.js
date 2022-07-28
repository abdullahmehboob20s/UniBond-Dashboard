import React, { useRef, useState } from "react";
import styles from "scss/components/SidebarHeader.module.scss";
import CommentsIcon from "./CommentsIcon";
import IconButton from "./IconButton";
import UserButton from "./UserButton";

function SidebarHeader() {
  return (
    <div className={styles.wrapper}>
      <IconButton icon="images/icons/moonIcon.svg" />
      <CommentsIcon />
      <IconButton icon="images/icons/BellIcon.svg" notify={true} />
      <UserButton />
    </div>
  );
}

export default SidebarHeader;
