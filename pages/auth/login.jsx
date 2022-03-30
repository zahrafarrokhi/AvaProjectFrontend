import { Button } from '@mui/material';
import React from 'react'
import LoginLayout from '../../components/loginlayout';
import styles from '../../styles/login.module.scss'
 function login() {
  return (
    <div className={`d-flex flex-column`}>
      <div className="d-flex flex-column">
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
  return(<LoginLayout>{page}</LoginLayout>)
}
export default login;