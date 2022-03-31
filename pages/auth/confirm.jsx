import React, { useEffect, useRef, useState } from "react";
import LoginLayout from "../../components/loginlayout";
import styles from "../../styles/Confirm.module.scss";
import VerificationInput from "react-verification-input";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GrRefresh } from "react-icons/gr";

const CODE_LENGTH = 4;
const EXP_TIME = 120;

const Confirm = (props) => {
  const [error, setError] = useState(false);
  const [time, setTime] = useState(EXP_TIME);
  const timerref = useRef();
  const theme = useTheme();

  const decrease_timer = () => {
    if (timerref.current) clearInterval(timerref.current); // only one interval can run at a time

    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
      // setTime((t)=> {
      //   if(t > 0) return t - 1
      //   else return 0
      // });
    }, 1000);

    timerref.current = timer;
  };

  useEffect(() => {
    // Page mount -> load
    decrease_timer();

    return () => {
      // Page unmount -> close
      if (timerref.current) clearInterval(timerref.current);
    };
  }, []);

  return (
    <div
      className={`d-flex flex-column align-self-stretch  flex-grow-1 align-items-center ${styles.cnt}`}
    >
      <div className="d-flex  flex-column align-items-center">
        <div className={`d-flex flex-row  ${styles.titlephone}`}>
          لطفا کد ارسال شده به شماره
        </div>
        <div className={`d-flex flex-row ${styles.phone_num} `}>4555</div>
        <div className={`d-flex flex-row  ${styles.titlephone}`}>
          وارد نمایید
        </div>
      </div>
      {/*  */}
      <div
        className={`d-flex flex-column align-items-stretch justify-content-center  ${styles.cntbox} `}
      >
        <div className={` ${styles.confirm_code}`}>کد تأیید را وارد کنید</div>
        <VerificationInput
          length={CODE_LENGTH}
          placeholder=""
          validChars="0-9۰-۹"
          // onChange={(e) => setCode(persianToEnglishDigits(e))}
          removeDefaultStyles
          autoFocus
          dir="ltr"
          classNames={{
            container: `d-flex flex-row justify-content-center ${styles.codecontainer}`,
            character: `rounded m-1 form-control ${styles.inpsingle}`,
            characterInactive: `rounded m-1 form-control ${styles.inpsingle} ${styles.inactive}`,
            characterSelected: `rounded m-1 form-control:focus form-control:active ${styles.inpsingle} ${styles.selected}`,
          }}
        />

        <Button
          variant="contained"
          sx={{
            width: " 260px",
            boxShadow: "2px 2px 14px rgba(0, 0, 0, 0.07)",
            borderRadius: " 0.5em",
            padding: "0.5em",
            marginTop: "0.75em",
            [theme.breakpoints.down("md")]: {
              width: "230px",
            },
          }}
        >
          ادامه
        </Button>
        {/* <button
          className={`btn btn-primary ${styles.btn}`}
          // onClick={submit}
          // disabled={time === 0 || code.length !== 4}
        >
          ادامه
        </button> */}
      </div>
      <div
        className={` m-3 d-flex  flex-row justify-content-between ${styles.refreshcnt}`}
      >
        <div
          className={`d-flex  ${styles.resendcode}`}
          // onClick={resendCode}
          disabled={time !== 0}
        >
          ارسال مجدد
        </div>
        <div className="d-flex align-items-center ">
          <GrRefresh className={`${styles.refresh}`} />
          {/* 90 => floor(1.5) -> 1 =>str(1)=>'1 */}
          {/* '1'.padStart(2, '0') = '01' */}
          {String(Math.floor(time / 60)).padStart(2, "0")}:
          {/*90 %60 =>30 =>'30' =>   */}
          {/* 01:30*/}
          {String(time % 60).padStart(2, "0")}
        </div>
      </div>
      {error && (
        <div
          className={`d-flex  align-self-center ${styles.error} ${styles.refreshcnt}`}
        >
          کد واردشده نامعتبر است.
        </div>
      )}
    </div>
  );
};
Confirm.getLayout = (page) => {
  return <LoginLayout backLink={true}>{page}</LoginLayout>;
};
export default Confirm;
