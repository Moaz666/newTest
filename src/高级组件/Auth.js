import React from 'react'

export default function CheckAuth(InnerComp) {
    return class Test extends React.Component{
        //判断没有token跳转到登录页面
        constructor(props){
            super(props);
            const token = localStorage.getItem('token');
            if (!token) {
                props.history.replace('/login')
            }
        }
        //判断token失效跳转到登录页面
        componentDidUpdate(){
            const token = localStorage.getItem('token');
            if (!token) {
                props.history.replace('/login')
            }
        }
        render() {
            console.log('this.props-高阶', this.props)
            return <InnerComp {...this.props} />

        }
    }
}