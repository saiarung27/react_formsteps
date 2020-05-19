import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
export class UserForm extends Component{
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        cit:'',
        bio:''
    }
    //proceed to nextstep
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    //go to prev step
    prevStep = () =>{
        const {step}=this.state;
        this.setState({
            step: step - 1
        });
    };
    //Handle field change
    handleChang = input => e => {
        this.setState({
            [input]:e.target.value
        });
    }
    render(){
        const {step} =this.state;
        const {firstName,lastName,email,occupation,cit,bio}=this.state;
        const values={firstName,lastName,email,occupation,cit,bio}
        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChang={this.handleChang}
                    values={values}

                    />
                );
            case 2:
                return<h1>Form Personal Detail</h1>;
            case 3:
                return<h1>Confirm</h1>;
            case 4:
                return<h1>Success</h1>;
            default:
                return<h1>throw error</h1>;
        }
    }
}
export default UserForm;