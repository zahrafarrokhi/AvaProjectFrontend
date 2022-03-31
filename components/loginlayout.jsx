import React from "react";
import styles from "../styles/loginlayout.module.scss";

import {IoArrowBackCircleOutline} from 'react-icons/io5'
import { useRouter } from "next/router";

const loginlayout = (props) => {
  const { children, backLink } = props;
  const router = useRouter();
  return (
    <div
      className={`d-flex flex-column  justify-content-center align-items-center ${styles.bgcnt}`}
    >
      <div
        className={`d-flex flex-row justify-content-center align-items-center ${styles.cnt}`}
      >
        <IoArrowBackCircleOutline
          className={backLink ? styles.back_link : "d-none"}
          onClick={() => router.back()}
        />
        {children}
      </div>
    </div>
  );
};
export default loginlayout;
