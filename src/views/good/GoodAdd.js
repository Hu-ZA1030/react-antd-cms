import React from "react"
import img from "@/utils/img"
// import "./style.scss"
import {
        Form,
        Divider,
        Input,
        Radio,
        Button,
        InputNumber,
        Upload,
    } from "antd"
import {CatesSelect} from "@/components"






 const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 }
  }
  

export default class GoodAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cate:"",
            imageUrl:img.uploadIcon
        }
    }
    // 提交表单
    onFinish(value){
        // console.log("提交",value)
    }

    // 图片上传
    imgChange({file}){
        // 坑： 这里会触发多次(分批上传，会触发多次)，前几次都是undefe
        // console.log("图片上传成功",file.response.data)
        if(file.response){
            console.log("图片",file.response.data) 
            this.setState({
                imageUrl:img.uploadUrl+file.response.data.url
            })
            
        }
    }

    
    render(){
        let {cate,imageUrl} = this.state
        return(
            <div className="goodAdd">
                <Divider orientation="left">添加商品</Divider>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{cate:""}}
                    onFinish={this.onFinish.bind(this)}
                >
                    <Form.Item
                        label="商品名称"
                        name="shopName"
                        rules={[{ required: true, message: 'Please input your shop name!' }]}>
                        <Input 
                            style={{width:250}}
                        />
                     </Form.Item>

                     <Form.Item
                        label="商品图片"
                        name="Imgname">
                         <Input
                          style={{width:250}}
                          placeholder="请上传商品图片CDN地址"/>
                     </Form.Item>


                    < Form.Item
                        label="商品价格"
                        name="price"
                        rules={[{ required: true, message: 'Please input your shop price!' }]}
                    >
                         <InputNumber
                            name="defaultValue"
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            style={{width:"250px"}}
                            />
                    </Form.Item>

                    <Form.Item
                        label="选择品类"
                        name="cate">
                        <CatesSelect value={cate} onChange={this.cate}></CatesSelect>
                    </Form.Item>

                    <Form.Item 
                    label="是否热销"
                    name="hot">
                    <Radio.Group value={"true"}>
                        <Radio value={"true"}>是</Radio>
                        <Radio value={"false"}>否</Radio>
                    </Radio.Group>
                    </Form.Item>
                    {/*
                    图片上传：
                        name属性：是后端对应的字段
                        action 访问 upload 接口，往往与API地址两码事
                    */}
                    <Form.Item {...tailLayout}>
                        <Upload
                            name="file"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={img.uploadUrl+"/upload/img"}
                            onChange={this.imgChange.bind(this)}
                        >
                         <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                        </Upload>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"> {/*htmlType="submit" 相当于type=“button”*/}
                            提交
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}