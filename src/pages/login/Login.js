import React, { Component } from 'react'
import { Flex, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'
import './login.scss'
import { getLogin } from '../../apis/apis'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

class Login extends Component {
    state = {
        phone: "",
        pwd: ""
    }

    login = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            if (!error) {
                this.sendLogin(value);
            }

        });
    }

    //发送请求
    sendLogin = (params) => {
        const { pwd, phone } = params;
        getLogin({ password: pwd, phoneNum: phone })
            .then((res) => {
                const { token, data } = res.data;
                localStorage.setItem('token', token)
                localStorage.setItem('phone', data.phoneNum)
                this.props.history.replace('/home')
            })
            .catch((e) => {
                console.log("错误提示信息", e);
            })
    }
    render() {
        const { getFieldProps } = this.props.form;

        // let { phone, pwd } = this.state
        return (
            <div className='login-box'>
                <Flex justify="center">
                    <img alt='' style={{ width: 100, height: 100 }} src={require('../../assets/imgs/logo.png')} />
                </Flex>
                <WingBlank>
                    <WhiteSpace size="lg">  </WhiteSpace>
                    <WhiteSpace size="lg">  </WhiteSpace>

                    <InputItem placeholder="请输入手机号码" {...getFieldProps('phone', { rules: [{ required: true }] })}>
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem placeholder="请输入密码" {...getFieldProps('pwd', { rules: [{ required: true }] })}>
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size="lg">  </WhiteSpace>
                    <WhiteSpace size="lg">  </WhiteSpace>

                    <Button style={{ background: "green" }} type="primary" onClick={this.login}>登录</Button>

                    <WhiteSpace size="lg">  </WhiteSpace>

                    <Flex justify='between'>
                        <Link to='/reg' style={{ color: "green" }}>手机快速注册</Link>
                        <Link to='/forgot' style={{ color: "green" }}>忘记密码</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}

export default createForm()(Login)
