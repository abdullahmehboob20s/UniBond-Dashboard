import React, { useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import IconButton from "components/IconButton";
import useMediaQuery from "hooks/useMediaQuery";
import SidebarLeft from "./SidebarLeft";
import { IoCaretDownCircleSharp, IoMenu } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import SidebarRight from "./SidebarRight";

function Navbar() {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <img src="images/white-egg.png" className={styles.logo} alt="" />

      {isBellow1024px ? (
        <button
          className={styles.hamburger}
          onClick={() => setIsLeftSidebarOpen(true)}
        >
          <IoMenu />
        </button>
      ) : null}

      <div>
        <div className={`${styles.LogoTitle}`}>
          <h1 className="fs-30px black weight-8">UniBond</h1>
          <button className="pointer">
            <IoMdRefresh className={`${styles.refreshIcon} gray`} />
          </button>
        </div>
        <div className={styles.pageName}>
          <h2
            className={`gray ${
              isBellow1024px ? "fs-12px" : "fs-18px"
            }  weight-6`}
          >
            Dashboard
          </h2>
          <IoCaretDownCircleSharp className={`${styles.downIcon} gray`} />
        </div>
      </div>

      {isBellow1024px ? (
        <IconButton
          img="images/peoples/user.png"
          className={styles.userIcon}
          notify={true}
          onClick={() => setIsRightSidebarOpen(true)}
        ></IconButton>
      ) : null}

      {isBellow1024px ? (
        <>
          <SidebarLeft state={[isLeftSidebarOpen, setIsLeftSidebarOpen]} />
          <SidebarRight state={[isRightSidebarOpen, setIsRightSidebarOpen]} />
        </>
      ) : null}

      <div
        className={`black-screen ${
          isLeftSidebarOpen | isRightSidebarOpen ? "show" : ""
        }`}
      ></div>
    </div>
  );
}

export default Navbar;
