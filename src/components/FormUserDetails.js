import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { render } from 'react-dom';

import  TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
 export class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        const{values,handleChang}=this.props;
       
        return(
           <MuiThemeProvider>
               <React.Fragment>
               <AppBar title="Enter User Details"/>
                        <TextField
                            hintText="Enter your FirstName"
                            floatingLabelText="First Name"
                            onChange={handleChang('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your LastName"
                            floatingLabelText="Last Name"
                            onChange={handleChang('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your email"
                            floatingLabelText="Email"
                            onChange={handleChang('email')}
                            defaultValue={values.email}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Occupation"
                            floatingLabelText="Occupation"
                            onChange={handleChang('occupation')}
                            defaultValue={values.occupation}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your City"
                            floatingLabelText="City"
                            onChange={handleChang('cit')}
                            defaultValue={values.cit}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Bio Data"
                            floatingLabelText="Bio"
                            onChange={handleChang('bio')}
                            defaultValue={values.bio}
                        />
                        <br/>

                        <RaisedButton
                        label="Continue" primary={true} style={styles.button} onClick={this.continue}
                        />
               </React.Fragment>
           </MuiThemeProvider>
            
        );
    }} const styles={
        button:{
            margin:15
        }
    }

           
 export default FormUserDetails;