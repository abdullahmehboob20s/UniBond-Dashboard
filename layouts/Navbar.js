import React from "react";
import styles from "scss/layout/Navbar.module.scss";
import { IoMdRefresh } from "react-icons/io";
import { IoCaretDownCircleSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="images/white-egg.png" alt="" />
      <div>
        <div className={`${styles.LogoTitle} mb-10px`}>
          <h1 className="fs-30px black weight-8">UniBond</h1>
          <button className="pointer">
            <IoMdRefresh size={26} className="gray" />
          </button>
        </div>
        <div className={styles.pageName}>
          <h2 className="gray fs-18px weight-6">Dashboard</h2>
          <IoCaretDownCircleSharp size={20} className="gray" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
