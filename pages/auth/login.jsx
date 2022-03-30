import { Button } from '@mui/material';
import React from 'react'
import loginlayout from '../../components/loginlayout';

 function login() {
  return (
    <div className={`d-flex flex-column`}>
      
      <Button variant="contained" sx={{}}>ورود</Button>
    </div>
  )
}
login.getLayout=(page)=>{
  return(<loginlayout>{page}</loginlayout>)
}
export default login;