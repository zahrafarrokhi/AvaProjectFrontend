import { Button } from "@mui/material";
import React from "react";
import LoginLayout from "../../components/loginlayout";
import styles from "../../styles/login.module.scss";
import { useTheme } from "@mui/material/styles";
import MainIcon from "../../public/icons/tooth-svgrepo-com.svg";

function Login() {
  const theme = useTheme();
  return (
    <div
      className={`d-flex flex-column flex-grow-1 align-self-stretch align-items-center justify-content-center`}
    >
      <MainIcon
        className={`d-flex d-md-none align-self-center ${styles.icontooth}`}
      />
      <div className="d-flex flex-column my-3">
        <label className={`d-flex m-1 ${styles.subtitle}`}>
          ورود / ثبت‌‌نام
        </label>
        <input
          type="text"
          placeholder="شماره موبایل"
          className={`form-control ${styles.phone_input}`}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          width: "300px",
          padding: "0.5em",
          [theme.breakpoints.down("md")]: {
            width: "240px",
          },
        }}
      >
        ورود
      </Button>
    </div>
  );
}
Login.getLayout = (page) => {
  return <LoginLayout back={false}>{page}</LoginLayout>;
};
export default Login;
