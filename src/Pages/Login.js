import React from 'react';
import { Button, TextField } from "@material-ui/core";

import './Login.css';


export default function Login() {

  return (
    <div className='page-login'>
      <text className='page-login-title' style={{fontSize:70, padding:30}}>LOGIN</text>
      <div className='page-login-logo'>
       <i class="fas fa-user-lock fa-3x"></i>
      </div>
      <div className='page-login-input'>
        <div className='page-login-input-text'>
          <TextField
            label="Email"
            style={{ margin: 8 }}
            // value={values.project_name}
            name="Email"
            InputLabelProps={{
                shrink: true
            }}
            fullWidth
            placeholder="Email"
            margin="normal"
            variant="outlined"
          /> 
          <TextField
            label="Password"
            style={{ margin: 8 }}
            // value={values.project_name}
            name="Password"
            InputLabelProps={{
                shrink: true
            }}
            fullWidth
            placeholder="Password"
            margin="normal"
            variant="outlined"
          /> 
        </div>
        <div className='page-login-input-button'>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            // component={Link}
            // to={{
            //     pathname: "/projectdashboard",
            //     aboutProps: {
            //         id: props.Pid,
            //         isManager: 1
            //     }
            // }}
            // onClick={onUpdate}
        >
            Login
            </Button>
        </div>
      </div>
    </div>
  );
}