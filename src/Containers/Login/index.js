import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Login.scss';

import { useSelector, useDispatch } from 'react-redux';

import { fetchAsyncUserDetails, getUserDetails } from '../../Store/userSlice';
import { useNavigate } from "react-router-dom";
const LoginContainer = () => {
    const userId = useRef();
    const userPassword = useRef();
    const dispatch = useDispatch();
    const userData = useSelector(getUserDetails)
    console.log('useData', userData)
    const navigate = useNavigate();
    const formSubmit = ()=>{
      const _email = userId.current.value.trim();
      const _pwd = userPassword.current.value;

      if(_email === ''){
        alert('Please enter your user id ');
        userId.current.focus();
      }else if(_pwd === ''){
        alert('Please eneter your password');
        userPassword.current.focus();
      }else{
        dispatch(fetchAsyncUserDetails({
          username: _email,
          password: _pwd,
          expiresInMins: 60
        }))
      }
    }
    const goForUserPage = ()=>{
        if(userData && userData.id && userData.id !== ''){
             navigate('/user');
        }else{
            // 
        }
    }
    useEffect(()=>{
        goForUserPage();
        // eslint-disable-next-line
    },[userData])
  return (
    <>
      <Container className="loginWrap">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <h2>Login</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="User ID"
              className="mb-3"
            >
              <Form.Control ref={userId} type="text" placeholder="userid" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control ref={userPassword} type="password" placeholder="Password" />
            </FloatingLabel>
            <br />
            <Button size="lg" onClick={formSubmit} variant="primary">Login</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginContainer;
