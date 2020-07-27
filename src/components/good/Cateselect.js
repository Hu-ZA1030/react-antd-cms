import React from 'react'
import {Select} from "antd"
import { getAllCates } from '@/store/actions/good'
import {connect} from "react-redux"

const {Option} = Select

// 封装业务组件(UI组件+业务数据)
// 封装业务组件方便组件的复用性。
// 可以使用  Props-Type 来进行属性验证

function mapStateToProps(state){
    return{
        cateArr:state.good.cateArr
    }
}

function mapActionToProps(dispatch){
    return{
        getCates:(params)=>dispatch(getAllCates(params))
    }
}


 class CateSelect extends React.Component{
    constructor(props){
        super(props)
        this.state={
                cates:[
                    {id:1,cate:"phone",cate_zh:"手机数码"},
                    {id:2,cate:"cart",cate_zh:"汽车之家"},
                    {id:3,cate:"pc",cate_zh:"电脑数码"},
                ]
        }
    }
    createSelect(){
        let {cateArr} = this.props
        return cateArr.map(ele=>(
            <Option key={ele._id} value={ele.cate}>
                {ele.cates_zh}
            </Option>
        ))
    }
    componentDidMount(){
        //调接口，获取所有的品类
        this.props.getCates({})
    }
    render(){
        let {value} = this.props
        value = value || ""
        // console.log("props",this.props)
        return(
            <div className="CatesList">
                <Select style={{width:100}} value={value} onChange={(val)=>this.props.onChange(val)}>
                   {this.createSelect()}
                </Select>
            </div>
        )
    }    
}

export default connect(mapStateToProps,mapActionToProps)(CateSelect)