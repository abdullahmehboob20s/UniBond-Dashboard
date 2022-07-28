import styles from "scss/components/UserDropdown.module.scss";

function UserDropdown(props) {
  const { ref } = props;
  const [stateValue, stateSetter] = props.state;

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={ref}
    >
      <button className={`${styles.btn} weight-6`}>Login</button>
      <button className={`${styles.btn} weight-6`}>Create Account</button>
    </div>
  );
}

export default UserDropdown;
