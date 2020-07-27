import React from "react"
import { Form,
         Input,
         Button,
         Checkbox 
    } from 'antd'
import "./style.scss"

// 高阶组件：withRouter 然后无状态组件拥有history的属性
import {withRouter} from "react-router-dom"

// 登入接口
import {login} from "@/utils/api"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

componentDidMount(){
    //通过 withRouter高阶组件，手动改变 "/login"
    this.props.history.replace("./login")
}
onFinish = values => {
    console.log('Success:', values);
    login(values).then(res=>{
        console.log("登入成功",res)
        //将后端获取的token 添加到 localStorage
        localStorage.setItem("token",res.token)
        // this.props.history("/")
        this.props.onLogin()
    })
};

    render(){
        return (
            <div className="login">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: false }}
                    onFinish={this.onFinish.bind(this)}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密  码"
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login)