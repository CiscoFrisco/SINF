import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import loginStyles from "../../styles/login.module.css";
  
const LoginForm = ({ username, password, setUsername, setPassword, onSubmit }) => (
    <div className={loginStyles.login}>
        <h3 className={loginStyles.h3}>Login</h3>
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="light" type="submit" className={loginStyles.submit}>
                Submit
            </Button>
        </Form>
    </div>
)

export default LoginForm;