import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "reduxState/slices/themeSlice";
import styles from "scss/components/SidebarHeader.module.scss";
import BellIcon from "./BellIcon";
import CommentsIcon from "./CommentsIcon";
import IconButton from "./IconButton";
import UserButton from "./UserButton";

function SidebarHeader() {
  const { isDark } = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  const themeChanger = () => {
    dispatch(toggleTheme(!isDark));
  };

  return (
    <div className={styles.wrapper}>
      <IconButton icon="images/icons/moonIcon.svg" onClick={themeChanger} />
      <CommentsIcon />
      <BellIcon />
      <UserButton />
    </div>
  );
}

export default SidebarHeader;
