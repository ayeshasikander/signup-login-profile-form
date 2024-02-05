import React from 'react';
import { Button, Form, Input, Divider, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const { Link } = Typography
    // const [redirectToLogin, setRedirectToLogin] = React.useState(false);

    const onFinish = (values) => {

        console.log('Success:', values);
        const storedUsers = JSON.parse(localStorage.getItem('userArray')) || [];

        const existingUser = storedUsers.find(user => user.email === values.email);

        if (existingUser) {
            message.info("User with this email already exists");
        } else {
            storedUsers.push(values);
            localStorage.setItem('userArray', JSON.stringify(storedUsers));
            message.success("User successfully signed up");
            // setRedirectToLogin(true);
            navigate('/login')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    // if(redirectToLogin){
    //     return <Navigate to="/login"/>
    // }

    return (
        <div className="main" id='main'>
            <div className="wrapper">

                <Form className='form' id='signup-form'
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Typography.Title>Sign Up</Typography.Title>

                    <Form.Item label="First Name" name={'firstName'}
                        rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input placeholder="Enter your first name" />
                    </Form.Item>

                    <Form.Item label="Last Name" name={'lastName'}
                        rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <Input placeholder="Enter your lastt name" />
                    </Form.Item>

                    <Form.Item label="Email" name={'email'}
                        rules={[{ required: true },{validator:(_, value) => value.includes('@') ? Promise.resolve() : Promise.reject('Please input your mail!')}]}>
                        <Input placeholder="Enter your mail" />
                    </Form.Item>

                    <Form.Item label="Password" name={'password'}
                        rules={[{ required: true, min: 8, message: 'Password must be 8 characters!'}]}>
                        <Input.Password type='password' placeholder='Enter your password' />
                    </Form.Item>

                    <Button type="primary" htmlType='submit'>SignUp</Button>

                    <Divider>Already have an account?  <Link href="/login" style={{ color: 'blue', fontSize: '18px' }}> Login</Link></Divider>
                </Form>

            </div>
        </div>
    )
}

export default Signup
