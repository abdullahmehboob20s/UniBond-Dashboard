import React from "react";
import styles from "scss/components/Sidebar.module.scss";
import SidebarHeader from "./SidebarHeader";
import { AiOutlineSearch } from "react-icons/ai";
import UserCard from "./UserCard";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.container}`}>
        <SidebarHeader />
      </div>

      <div className={styles.usersCardsWrapper}>
        <div className={styles.container2}>
          <header className={styles.userHeader}>
            <h1 className="fs-30px black weight-7 lh-1">Live Now</h1>
            <button>
              <AiOutlineSearch size={24} className="gray" />
            </button>
          </header>
        </div>
        <main className={styles.usersCards}>
          <UserCard
            notify={true}
            img="images/peoples/user1.png"
            name="Mike Taylor"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="images/peoples/user2.png"
            name="James Green"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="images/peoples/user3.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            notify={true}
            img="images/peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user4.png"
            name="Michael Richard"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user1.png"
            name="Nicole James"
            skill="Solidity Expert"
          />
          <UserCard
            img="images/peoples/user2.png"
            name="Carmen Lewis"
            skill="Solidity Expert"
          />
        </main>
      </div>

      <div className={styles.container}>
        <div className={styles.messageBox}>
          {/* <img
            src="images/icons/commentYellowIcon.svg"
            className={styles.commentIcon}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
