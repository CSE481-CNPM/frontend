import React, { useRef } from 'react';

import './Login.css';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onEmailChange = () => {
    const email = onEmailChange(emailRef.current.value);
  };
  const onPasswordChange = () => {
    const password = onPasswordChange(passwordRef.current.value);
  };
  const onSubmitLogin = () => {
    console.log('...');
  };
  return (
    <div className='login'>
      <div className='form'>
        <h3>Đăng Nhập</h3>

        <div className='form-field'>
          <input
            type='text'
            className='form-input'
            name='email'
            placeholder='Email'
            onChange={onEmailChange}
            ref={emailRef}
          />
        </div>
        <div className='form-field' name='password'>
          <input
            type='text'
            className='form-input'
            placeholder='Mật khẩu'
            onChange={onPasswordChange}
            ref={passwordRef}
          />
        </div>

        <p className='btn-register' onClick={onSubmitLogin}>
          Đăng nhập
        </p>
        <p className='res-question'>
          Bạn chưa có tài khoản? <span>Đăng kí ngay</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
