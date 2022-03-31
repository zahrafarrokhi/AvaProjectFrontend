import LoginLayout from "../../components/loginlayout";
import React, { useState } from "react";
import Link from "next/link";
// import { useDispatch, useSelector } from 'react-redux';
// import LoginLayout from '../../components/LoginLayout';
import PatientHistoryItem from "../../components/PatientHistoryItem";
import styles from "../../styles/PatientHistory.module.scss";
// import { updatePatient, updatePatientHistory } from '../../lib/slices/patient';

const FIELDS = [
  {
    question: "ناراحتی قلبی یا رماتیسم",
    id: 1,
  },
  {
    question: "تیروئید",
    id: 2,
  },
  {
    question: "ناراحتی خونی",
    id: 3,
  },
  {
    question: "فشار خون بالا",
    id: 4,
  },
  {
    question: "حساسیت غذایی یا دارویی",
    id: 5,
  },
  {
    question: "آسم و تنگی نفس",
    id: 6,
  },
  {
    question: "ناراحتی گوارشی",
    id: 7,
  },
  {
    question: "دیابت",
    id: 8,
  },
  {
    question: "ناراحتی عصبی",
    id: 9,
  },
  {
    question: "بارداری",
    id: 10,
  },
];

function History() {
  // const patient = useSelector((state) => state.patientReducer?.patient);

  // const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [description, setdescription] = useState("");
  const submit = async () => {
    try {
      // await dispatch(updatePatientHistory({ history: { description: description, ...state }, patientId: patient.id })).unwrap();
      router.push("/patients/");
    } catch (e) {
      // setError(true);
    }
  };

  return (
    <div className={`p-3 ${styles.history_container}`}>
      <div
        className={`d-flex justify-content-start align-items-center ${styles.patient_title_div}`}
      >
        <h1 className={`fw-bold ${styles.patient_title}`}>
          سوابق بیماری و پزشکی
        </h1>
      </div>
      <div
        className={`d-flex flex-column align-items-center  my-3 ${styles.patient_history_div}`}
      >
        {FIELDS?.map((field) => (
          <PatientHistoryItem
            key={field.id}
            // fieldData -> info for  FIELDS
            fieldData={field}
            state={state[field.id]}
            update={(res) => {
              /*
              let newstate = {...state};
              newstate[field.id] = res; // newstate[8] = res
              setState(newstate)
              */
              setState({ ...state, [field.id]: res });
            }}
          />
        ))}
      </div>
      <div
        className={`d-flex flex-column flex-md-row align-items-start ${styles.patient_description_div}`}
      >
        <div className={`d-none d-md-flex ms-2 ${styles.description}`}>
          <span className={` ${styles.description_text}`}>
            در صورت دارا بودن بیماری های خاصی که لازم به توضیح است یا هرگونه
            دارویی که مصرف میکنید لطفا با پزشک معالج درمیان بگذارید
          </span>
        </div>
        <span
          className={`d-flex d-md-none fw-bold mb-3 ${styles.mobile_description_title}`}
        >
          توضیحات
        </span>
        <textarea
          className={`form-control mb-3 mb-md-0 ${styles.description_textarea}`}
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          // value={state.description}
          // onChange={(e) => setState({ ...state, description: e.target.value })}
        >
         
        </textarea>
      </div>
      <div className={`text-start ${styles.submit_btn_div}`}>
        <Link href="#">
          <button
            className={`btn btn-primary ${styles.submit_btn}`}
            onClick={submit}
          >
            تکمیل ثبت نام
          </button>
        </Link>
      </div>
    </div>
  );
}

History.getLayout = (page, props) => (
  <LoginLayout {...props}>{page}</LoginLayout>
);

export default History;
