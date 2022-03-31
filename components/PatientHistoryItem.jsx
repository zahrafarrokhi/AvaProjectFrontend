import React, { useState } from 'react';
import styles from '../styles/PatientHistoryItem.module.scss';



function PatientHistoryItem(props) {
  const { fieldData, update, state = {} } = props;

  const has = (val) => {
    update({ ...state, has: val });
  };
  const description = (e) => {
    update({ ...state, description: e.target.value });
  };

  return (
    <div className={`d-flex flex-column flex-md-row align-items-start align-items-md-center w-100 my-2 ${styles.item_container}`}>
      <span className={`ms-3 text-right text-md-start  ${styles.question}`}>{fieldData.question}</span>
      <div className={`d-flex justify-content-evenly ${styles.has_deases_div}`}>
        <div onClick={() => has(true)} className={` mx-3 ${state?.has ? styles.active : styles.deases}`}>دارم</div>
        <div onClick={() => has(false)} className={`ms-3 me-1  ${state?.has === false ? styles.active : styles.deases}`}>ندارم</div>
      </div>
      <span className={`d-none d-md-flex mx-3 ${styles.description}`}>توضیحات</span>
      <input className={`d-none d-md-flex form-control w-100 ${styles.input}`} value={state?.description} onChange={(e) => description(e)} />
    </div>
  );
}

export default PatientHistoryItem;