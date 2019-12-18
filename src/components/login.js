import React,{Component} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField
  } from "@material-ui/core";
import {Link} from "react-router-dom"; 
  
class login extends Component{
     login = ()=>{
        document.cookie = "loggedIn=true"
         window.location.replace("/dashboard1")        
    }
    render(){
        return (
            <div className="App-header2">
       
        <div className="loginContainer">
          {/* <Button color="inherit">Login</Button> */}
          <TextField
            id="Username*"
            label="Username*"
            type="text"
            autoComplete="current-password"
            margin="normal"
          >
            password
          </TextField>

          <TextField
            id="standard-password-input"
            label="Password*"
            type="password"
            autoComplete="current-password"
            margin="normal"
          >
            password
          </TextField>
          <Link>
          
          <Button className="buttonl"
            onClick={() => {
              this.login()
              this.setState({ loggedIn: true });
            }}
          >
            login
          </Button>
          </Link>
        </div>
      </div>
        )
    }
}
export default login;