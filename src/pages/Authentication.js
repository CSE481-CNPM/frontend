import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorModal from '../shared/components/ErrorModal';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import { AuthContext } from '../shared/context/auth-context';
import axios from 'axios';

import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import Login from '../components/Login';
import Register from '../components/Register';

import './Authentication.css';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onUsernameChange = (firstName, lastName) => {
    setUsername(`${firstName} ${lastName}`);
  };
  const onEmailChange = (email) => {
    setEmail(email);
  };
  const onPasswordChange = (password) => {
    setPassword(password);
  };
  const onConfirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
  };

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const authModeToggler = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setIsLoginMode(!isLoginMode);
  };

  const authSubmitHandler = async () => {
    if (!isLoginMode) {
      if (
        username === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
      ) {
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      } else if (!validateEmail(email)) {
        setError('Email không hợp lệ');
        return;
      } else if (password.length < 3 || password.length > 6) {
        setError('Độ dài password chưa hợp lệ');
        return;
      } else if (password !== confirmPassword) {
        setError('Confirm Password chưa chính xác');
        return;
      }
    } else {
      if (email === '' || password === '') {
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      } else if (!validateEmail(email)) {
        setError('Email không hợp lệ');
        return;
      } else if (password.length < 3 || password.length > 6) {
        setError('Độ dài password chưa hợp lệ');
        return;
      }
    }

    if (isLoginMode) {
      setIsLoading(true);
      // axios({
      //   method: 'post',
      //   baseURL: process.env.REACT_APP_BACKEND_URL,
      //   url: '/login',
      //   data: {
      //     Email: email.toString(),
      //     Password: password.toString(),
      //   },
      // })
      //   .then((res) => {
      //     auth.login(
      //       res.data.user.id,
      //       res.data.user.IsAdmin,
      //       res.data.user.Username,
      //       res.data.token
      //     );
      //     setIsLoading(false);
      //   })
      //   .catch((err) => {
      //     setIsLoading(false);
      //     setError(err.message);
      //   });
      console.log('Login...', username, email, password, confirmPassword);
    } else {
      setIsLoading(true);
      // axios({
      //   method: 'post',
      //   baseURL: process.env.REACT_APP_BACKEND_URL,
      //   url: '/register',
      //   data: {
      //     Email: email.toString(),
      //     Password: password.toString(),
      //     Password_confirmation: confirmPassword.toString(),
      //     Username: username.toString(),
      //     IsAdmin: '0',
      //     IdNhanVien: 0,
      //   },
      // })
      //   .then((res) => {
      //     auth.login(
      //       res.data.user.id,
      //       res.data.user.IsAdmin,
      //       res.data.user.Username,
      //       res.data.token
      //     );
      //     setIsLoading(false);
      //   })
      //   .catch((err) => {
      //     setIsLoading(false);
      //     setError(err.message);
      //   });
      console.log('Register...', username, email, password, confirmPassword);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <div className="authentication-wrapper">
        <Navbar />
        {isLoginMode ? (
          <Login
            authModeToggler={authModeToggler}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            authSubmitHandler={authSubmitHandler}
          />
        ) : (
          <Register
            authModeToggler={authModeToggler}
            onUsernameChange={onUsernameChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onConfirmPasswordChange={onConfirmPasswordChange}
            authSubmitHandler={authSubmitHandler}
          />
        )}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Authentication;
