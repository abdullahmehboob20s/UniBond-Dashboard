import CompanyProgressCard from "components/CompanyProgressCard";
import Sidebar from "components/Sidebar";
import React from "react";
import styles from "scss/layout/DashboardLayout.module.scss";
import Navbar from "./Navbar";

function Dashboardlayout({ children }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
      </div>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboardlayout;
