import { Button } from "@mui/material";
import React, { useState } from "react";
import LoginLayout from "../../components/loginlayout";
import styles from "../../styles/PatientList.module.scss";
import { useTheme } from "@mui/material/styles";
import { AiOutlinePlus } from "react-icons/ai";

const Patients = (props) => {
  const theme = useTheme();

  const [selectedPatient, selectPatient] = useState(null);

  const patients = [
    {
      id: 1,
      first_name: "zahra",
      last_name: "farrokhi",
    },
    {
      id: 2,
      first_name: "zahra1",
      last_name: "farrokhi1",
    },
    {
      id: 3,
      first_name: "zahra2",
      last_name: "farrokhi2",
    },
  ];
  return (
    <div
      className={`d-flex flex-column flex-grow-1 align-self-stretch   ${styles.cnt}`}
    >
      <div
        className={` d-flex   flex-column align-items-center  ${styles.title}`}
      >
        <div>مراجعه کننده محترم</div>
        <div className="flex-row align-self-center">
          با انتخاب هر یک از کاربران قبلی وارد همان پروفایل شوید و یا پروفایل
          جدیدی بسازید.
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        {patients?.map((p) => (
          <div
            className="d-flex flex-column p-1 align-self-center align-items-center"
            key={p.id}
          >
            <input
              type="radio"
              className={`btn-check btn-outline-primary ${styles.btn} ${styles.btnsm} ${styles["text-light-blue"]}`}
              name="patientselect"
              id={`patient_select_${p.id}`}
              autoComplete="off"
              value={p.id}
              onChange={(e) => selectPatient(Number(e.target.value))}
              checked={selectedPatient === p.id}
            />
            <label
              className={`btn btn-outline-primary align-items-center justify-content-center m-2 ${
                styles.btn
              } ${styles.sbtn} ${
                selectedPatient === p.id ? styles["sbtn-checked"] : ""
              }`}
              htmlFor={`patient_select_${p.id}`}
            >
              {p.first_name} {p.last_name}
            </label>
          </div>
        ))}
        <div className="d-flex flex-column p-2 align-self-center align-items-center">
          <Button
            variant="outlined"
            startIcon={
              <AiOutlinePlus className={`m-1 ${styles["plus-icon"]}`} />
            }
            // className={`d-flex btn btn-outline-primary ${styles.btn} ${styles.btnsm} ${styles["text-light-blue"]}`}
            sx={{
              width: "320px",
              padding: "0.5em",
              borderRadius: "0.5em",
              lineHeight: "1.6em",
              fontSize: "1.1em",
              // padding:" 0.3em",
              [theme.breakpoints.down("md")]: {
                width: "200px",
              },
            }}
          >
            ورود
          </Button>
        </div>
      </div>
      <div className="d-flex flex-column p-2 align-self-center align-items-center">
        <Button
          variant="contained"
          sx={{
            width: "320px",
            padding: "0.5em",
            borderRadius: "0.5em",
            lineHeight: "1.6em",
            fontSize: "1.1em",
            // padding:" 0.3em",
            [theme.breakpoints.down("md")]: {
              width: "200px",
            },
          }}
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

Patients.getLayout = (page) => {
  return <LoginLayout back={false}>{page}</LoginLayout>;
};
export default Patients;
