
import React from "react";
import styles from "../styles/loginlayout.module.scss";

const loginlayout = (props) => {
  const {children} = props;
  return (
    <div className={`d-flex flex-column  justify-content-center align-items-center ${styles.bgcnt}`}>
      <div className={`d-flex flex-row justify-content-center align-items-center ${styles.cnt}`}>

        {children}
      </div>
    </div>
  );
};
export default loginlayout;
