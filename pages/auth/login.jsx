import { Button } from '@mui/material';
import React from 'react'
import loginlayout from '../../components/loginlayout';
import styles from '../../styles/login.module.scss'
 function login() {
  return (
    <div className={`d-flex flex-column`}>
      <div className="d-flex flex-row">
        <label>ورود / ثبت‌‌نام</label>
        <input type="text"
           placeholder='شماره موبایل'
           className={`form-control ${styles.phone_input}`}
        />
      </div>
      <Button variant="contained" sx={{}}>ورود</Button>
    </div>
  )
}
login.getLayout=(page)=>{
  return(<loginlayout>{page}</loginlayout>)
}
export default login;