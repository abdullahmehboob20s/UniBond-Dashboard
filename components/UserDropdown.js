import styles from "scss/components/UserDropdown.module.scss";
import { useDispatch } from "react-redux";
import { toggleState as toggleLoginScreenState } from "reduxState/slices/loginScreenSlice";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { toggleState as toggleBlackScreenState } from "reduxState/slices/blackScreenSlice";

function UserDropdown(props) {
  const [stateValue, stateSetter] = props.state;
  const dispatch = useDispatch();
  const dropdownRef = OutsideClickDetector(() => stateSetter(false));

  const login = () => {
    dispatch(toggleLoginScreenState(true));
    dispatch(toggleBlackScreenState(true));
    stateSetter(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${stateValue ? styles.open : ""}`}
      ref={dropdownRef}
    >
      <button className={`${styles.btn} weight-6`} onClick={login}>
        Login
      </button>
      <button className={`${styles.btn} weight-6`}>Create Account</button>
    </div>
  );
}

export default UserDropdown;
