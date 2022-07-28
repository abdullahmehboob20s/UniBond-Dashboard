import React, { useRef, useState } from "react";
import styles from "scss/components/SidebarHeader.module.scss";
import BellIcon from "./BellIcon";
import CommentsIcon from "./CommentsIcon";
import IconButton from "./IconButton";
import UserButton from "./UserButton";

function SidebarHeader() {
  return (
    <div className={styles.wrapper}>
      <IconButton icon="images/icons/moonIcon.svg" />
      <CommentsIcon />
      <BellIcon />
      <UserButton />
    </div>
  );
}

export default SidebarHeader;
