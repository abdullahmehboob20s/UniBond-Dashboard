import CompanyProgressCard from "components/CompanyProgressCard";
import Sidebar from "components/Sidebar";
import React from "react";
import styles from "scss/layout/DashboardLayout.module.scss";
import Navbar from "./Navbar";

function Dashboardlayout({ children, showSidebar = true }) {
  return (
    <div className={`${styles.dashboard} ${showSidebar ? styles.sidebar : ""}`}>
      <div className={styles.left}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
      </div>

      {showSidebar ? (
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboardlayout;
