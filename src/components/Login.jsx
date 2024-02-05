import React from 'react';
import { Button, Form, Input, Divider, Typography,message } from 'antd';
import {  useNavigate} from 'react-router-dom';

const Login = () => {
    const { Link } = Typography
    const navigate = useNavigate();

    const handleLogin = (values) => {
        const storedUsers = JSON.parse(localStorage.getItem('userArray')) || [];
        const existingUser = storedUsers.find(user => user.email === values.email && user.password === values.password);

        if (existingUser) {
        //     console.log('Existing user:', existingUser);
        // console.log('User ID:', existingUser.id);
            navigate(`/profile/${existingUser.email}`);
            
        } else {
            message.error('Invalid credentials');
        }
    };
// if(redirectToProfile){
//     return <Navigate to="/profile"/>
// }
    return (
        <div className="main" id='main'>
            <div className="wrapper">

                <Form className='form' id='login-form' onFinish={handleLogin} layout='vertical'>
                    <Typography.Title>LogIn</Typography.Title>

                    <Form.Item label="Email" name={'email'}
                        rules={[{ required: true, message: 'Please input your mail!' }]}>
                        <Input placeholder="Enter your mail" />
                    </Form.Item>

                    <Form.Item label="Password" name={'password'}
                        rules={[{ required: true, message: 'Password must be 8 characters!' }]}>
                        <Input.Password type='password' placeholder='Enter your password' />
                    </Form.Item>

                    <Button type="primary" htmlType='submit' className='btn'>Login</Button>

                    <Divider>Don't have an account?  <Link href="/" style={{ color: 'blue', fontSize: '18px' }}> Signup</Link></Divider>
                </Form>

            </div>
        </div>
    )
}

export default Login
