import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useParams } from 'react-router-dom';


const UserProfile = () => {
    const { email } = useParams();
    const userData = JSON.parse(localStorage.getItem('userArray')) || [];
    const currentUser = userData.find(user => user.email === email);

    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    const onFinish = (values) => {
        const updatedUserData = userData.map(user => {
            if (user.email === email) {
                return { ...user, ...values };
            }
            return user;
        });
        localStorage.setItem('userArray', JSON.stringify(updatedUserData));
        toggleEdit();
    };
    const onEditCancel = () => {
        form.resetFields();
        toggleEdit();
    };


    return (
        <div>
            <div className="main" id='main'>
                <div className="wrapper">

                    <Form className='form' id='signup-form'
                        layout='vertical'
                        onFinish={onFinish}
                        initialValues={currentUser}
                        autoComplete='off'
                    >
                        <Typography.Title>User Profile</Typography.Title>
                        <div className='name'>
                            <Form.Item label="First Name" name={'firstName'}
                                rules={[{ required: true, message: 'Please input your first name!' }]}>
                                <Input placeholder="Enter your first name" />
                            </Form.Item>

                            <Form.Item label="Last Name" name={'lastName'}
                                rules={[{ required: true, message: 'Please input your last name!' }]}>
                                <Input placeholder="Enter your lastt name" />
                            </Form.Item>
                        </div>

                        <div className="name">
                            <Form.Item label="Email" name={'email'}
                                rules={[{ required: true, message: 'Please input your mail!' }]}>
                                <Input placeholder="Enter your mail" />
                            </Form.Item>

                            <Form.Item label="Age" name={'age'}
                                rules={[{ required: true, message: 'Please input your age!' }]}>
                                <Input placeholder="Enter your age" />
                            </Form.Item>
                        </div>

                        <div className="name">
                            <Form.Item label="Education" name={'education'}
                                rules={[{ required: true, message: 'Please input your education!' }]}>
                                <Input placeholder="Enter your education" />
                            </Form.Item>

                            <Form.Item label="Address" name={'address'}
                                rules={[{ required: true, message: 'Please input your address!' }]}>
                                <Input placeholder="Enter your address" />
                            </Form.Item>
                        </div>


                        <Form.Item label="Phone" name={'phone'}
                            rules={[{ required: true, message: 'Please input your phone!' }]}>
                            <Input placeholder="Enter your phone" />
                        </Form.Item>

                        {isEditing ? (
                            <>
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                                <Button onClick={onEditCancel} style={{ marginLeft: 8 }}>
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button type="primary" onClick={toggleEdit}>
                                Edit
                            </Button>
                        )}

                    </Form>

                </div>
            </div>
        </div>
    )
}

export default UserProfile
