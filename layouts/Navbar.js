import React from "react";
import styles from "scss/layout/Navbar.module.scss";
import { IoMdRefresh } from "react-icons/io";
import { IoCaretDownCircleSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="images/white-egg.png" className={styles.logo} alt="" />
      <div>
        <div className={`${styles.LogoTitle}`}>
          <h1 className="fs-30px black weight-8">UniBond</h1>
          <button className="pointer">
            <IoMdRefresh className={`${styles.refreshIcon} gray`} />
          </button>
        </div>
        <div className={styles.pageName}>
          <h2 className="gray fs-18px weight-6">Dashboard</h2>
          <IoCaretDownCircleSharp className={`${styles.downIcon} gray`} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
