import IconButton from "components/IconButton";
import React from "react";
import styles from "scss/layout/SidebarRight.module.scss";

import { IoClose } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import SidebarFooter from "./SidebarFooter";

function SidebarRight(props) {
  const [state, stateSetter] = props.state;
  const sidebarRef = OutsideClickDetector(() => stateSetter(false));

  return (
    <div
      className={` ${styles.sidebar} ${state ? styles.open : ""}`}
      ref={sidebarRef}
    >
      <header>
        <button className={styles.closeBtn} onClick={() => stateSetter(false)}>
          <IoClose />
        </button>
        <IconButton img="peoples/user.png"></IconButton>
      </header>

      <main>
        <Link href="/" passHref>
          <a href="">
            <span className="fs-20px black weight-6">Messages</span>
            <IconButton
              wrapperClassName={styles.sidebarlinkIcon}
              icon="icons/commentsIcon.svg"
            />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <span className="fs-20px black weight-6">Notification</span>
            <IconButton
              wrapperClassName={styles.sidebarlinkIcon}
              icon="icons/BellIcon.svg"
              notify={true}
            />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <span className="fs-20px black weight-6">My Account</span>
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <span className="fs-20px black weight-6">My Orders</span>
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={styles.logoutBtn}>
            <span className="fs-20px black weight-6">Log Out</span>
          </a>
        </Link>
      </main>

      <SidebarFooter className={styles.footer} />
    </div>
  );
}

export default SidebarRight;
