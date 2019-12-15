import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import signupStyles from "../../styles/signup.module.css";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";
const SignUpForm = ({ username, email, password, confirmPassword, setUsername, setEmail, setPassword , setConfirmPassword, onSubmit }) => {
    return(
        <div className={signupStyles.form}>
            <h3 className={signupStyles.h3}>Sign Up</h3>
            <Form onSubmit={onSubmit} >
                <Form.Group controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    {((password===confirmPassword) && password.length>0) ? 
                    (
                        <IconContext.Provider value={{ color: 'green'}} >
                            <FaCheck className={signupStyles.icon}/> 
                    </IconContext.Provider> )
                        : (
                            <IconContext.Provider value={{ color: 'red'}}>
                            <FaTimes className={signupStyles.icon}/> 
                    </IconContext.Provider> )}
                    
                </Form.Group>
                <Button variant="light" type="submit" className={signupStyles.submit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default SignUpForm;