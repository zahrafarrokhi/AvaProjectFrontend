import { Button } from "@mui/material";
import React from "react";
import LoginLayout from "../../components/loginlayout";
import styles from "../../styles/login.module.scss";
function login() {
  return (
    <div className={`d-flex flex-column`}>
      <div className="d-flex flex-column my-3">
        <label className={`d-flex m-1 ${styles.subtitle}`}>ورود / ثبت‌‌نام</label>
        <input
          type="text"
          placeholder="شماره موبایل"
          className={`form-control ${styles.phone_input}`}
        />
      </div>
      <Button variant="contained" sx={{ width: "300px",padding:'0.5em' }}>
        ورود
      </Button>
    </div>
  );
}
login.getLayout = (page) => {
  return <LoginLayout>{page}</LoginLayout>;
};
export default login;
