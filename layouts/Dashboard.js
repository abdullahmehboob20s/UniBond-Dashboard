import React from "react";
import styles from "scss/layout/Dashboard.module.scss";
import CompanyProgressCard from "components/CompanyProgressCard";

function Dashboard() {
  return (
    <main className={styles.main}>
      <CompanyProgressCard
        title="Total Development Ongoing"
        subtitle="12"
        inWeek="25"
        icon="images/icons/development-icon.png"
      />
      <CompanyProgressCard
        title="Total Audit Ongoing"
        subtitle="05"
        inWeek="8"
        icon="images/icons/total-audit-icon.png"
      />
      <CompanyProgressCard
        title="Total Marketing Ongoing"
        subtitle="13"
        inWeek="15"
        icon="images/icons/total-marketing-icon.png"
      />
      <CompanyProgressCard
        title="Total Revenue from projects"
        subtitle="$ 13,843,659"
        inWeek="25"
        textCenter={true}
        subtitleFontSize="fs-30px"
      />
      <div className={styles.tweets}>
        <img src="images/tweets.png" alt="" />
      </div>
      <div className={styles.cards}>
        <CompanyProgressCard
          title="Total Projects Completed"
          subtitle="405"
          inWeek="31"
          bg="#F4BB00"
        />
        <CompanyProgressCard
          title="Total Revenue from projects"
          subtitle="$ 13,843,659"
          inWeek="25"
          textCenter={true}
          subtitleFontSize="fs-30px"
        />
      </div>
      <div className={styles.ongoingProjectCode}>
        <h1 className="fs-22px weight-7 mb-25px black">
          Ongoing Project open code.
        </h1>
        <div className={styles.projectCode}>
          <img src="images/code.png" alt="" />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.box1}>
          <img src="images/blockaudit-report.svg" alt="" />
          <div className={styles.reportTitles}>
            <div>
              <h4 className="fs-20px weight-6 black mb-5px">
                Last Audited Project:
              </h4>
              <h2
                className={`fs-24px black weight-8 lh-1 ${styles.reportLink}`}
              >
                www.blockaudit.report
              </h2>
            </div>
            <img src="images/icons/grayYellowTick.svg" alt="" />
          </div>
        </div>

        <div className={styles.box}>
          <p className="fs-14px weight-6 black">Inconsistencies Found : 31</p>
          <p className="fs-14px weight-6 black">Errors Rectified : 31</p>
          <p className="fs-14px weight-6 black">Code Analysed : 10003</p>
        </div>
        <div className={styles.box}>
          <p className="fs-14px weight-6 black">KYC done : 35</p>
          <p className="fs-14px weight-6 black">Payments Generated : 91</p>
          <p className="fs-14px weight-6 black">
            Time Saved per transaction : 2.22s
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
