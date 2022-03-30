
import React from "react";
import styles from "../styles/loginlayout.module.scss";

const loginlayout = (props) => {
  const {children} = props;
  return (
    <div className={`d-flex flex-column ${styles.bgcnt}`}>
      <div className={`d-flex flex-column ${styles.cnt}`}>

        {children}
      </div>
    </div>
  );
};
export default loginlayout;
