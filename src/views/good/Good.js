import React from 'react'
// import moment from "moment"
import { Table, Divider ,Row,Col,Input,DatePicker,Modal,Button} from 'antd'
import {CatesSelect} from "@/components"

import {connect} from "react-redux"

import img from '@/utils/img'
import {getGood} from "@/store/actions/good"
import { delGoodlist } from '../../utils/api'



const {RangePicker } = DatePicker
 class Good extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible:false,
      row:{}, 
      data: [], //用于存储后台返回的数据
      params:{
        page:1,
        size:4,
        cate:"",
        hot:true
      }
    }
  }

//日期事件
// 这里可以使用两种方式，
// 一种是直接使用组件封装的方法dateStrings：
// console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
// 另一种是使用 momentJs的库，将其转为标准格式
dataFilter(dates,dateStrings) {
  // console.log('From: ', dates[0], ', to: ', dates[1])
  // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
  // 使用 dateStrings 方式
  let startTime = dateStrings[0]
  let endTime =  dateStrings[1]
  // 使用 moment库的方式 
  // let startTime = dates[0].format("yyyy-MM-DD HH:mm:ss")
  // let endTime = dates[1].valueOf()
  console.log("startTime",startTime,"endTime",endTime)
}

//表格的编辑函数
tableRowEdit(type,row){
  switch(type){
    case "edit":
      this.setState({visible:true,row:row})
    break;
    case "del":
      // console.log("row",row)
      let param = {
        id:row._id
      }
      delGoodlist(param).then(res=>{
        // console.log("res",res)
        this.props.getGoods(this.state.params)
      })
    break;
    default:
  }
}


// 弹框事件
modelBtnClick(type){
    switch (type){
      case "ok":
        // 提交接口
        console.log("接口提交");
      break;
      case "cancel":
        console.log("我关闭了")
        this.setState({
          visible:false
        })
      break;
      default:
    }
}

// 新增按钮，跳转到添加页面
addShop(){
  // console.log(this.props.history)
  this.props.history.push("/good/add")
}


// react 生命周期函数，调用接口，获取商品类别
componentDidMount(){
   this.props.getGoods(this.state.params)

}

filterChangs(key,value){
  // 改变params
  let {params} = this.state
  if(key !== "page") params.page = 1
  params[key] = value
  this.setState({params})
  // 调接口，更新数据
  this.props.getGoods(params)
}

  //品类筛选： 下拉框onChange事件
  cateFilter(val){
    // this.setState({
    //     // 这里调接口进行刷选
    //     cate:val
    // })
    this.filterChangs("cate",val)

  }

  // 页码变化
  pageChange(page,size){
    console.log(page,size)
    this.filterChangs("page",page)
  }
  // 商品条数的变化
  sizeChange(count,size){
    console.log(count,size)
    this.filterChangs("size",size)
  }

  render() {
    let {visible,row ,params} = this.state
    let {goodArr} = this.props
    const columns = [
      {
        title: '商品',
        dataIndex: 'shop',
        key: 'shop',
        render: (text, row, index)=>{
          return (
            <div>
              <img style={{display:'inline-block',width:'50px',height:'50px'}} src={row.img} alt=""/>
              <div>{text}</div>
            </div>
          )
        }
      },
      {
        title: '商品描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '商品分类',
        dataIndex: 'cate',
        key: 'cate',
      },
      {
        title: '上架时间',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '操作',
        dataIndex: 'handel',
        key: 'handel',
        render:(val,row,index)=>{
           return(
            <div className='table-handle'>
            <Button onClick={this.tableRowEdit.bind(this,'edit', row)}>编辑</Button>
            <Button onClick={this.tableRowEdit.bind(this,'del', row)}>删除</Button>
          </div>
           )
        }
      }
    ]


    return (
      <div className="good-list">
        <Divider orientation="left">商品列表</Divider>

        <div style={{marginBottom:15}}>
          <Row align="middle"> 
              <Col span={2}>
                <span>名称搜索:</span>
              </Col>
              <Col span={4}>  
                <Input/>
              </Col>
              <Col span={2} style={{marginLeft:25}}>
                <span>筛选品类:</span>
              </Col>
              <Col span={3}>
                <CatesSelect value={params.cate} onChange={this.cateFilter.bind(this)}></CatesSelect>
              </Col>
              <Col span={2}>
                <span>日期选择:</span>
              </Col>
              <Col span={8}>
              <RangePicker
                  showTime
                  format="YYYY/MM/DD HH:mm:ss"
                  onChange={this.dataFilter.bind(this)}
                />
              </Col>
              <Col style={{marginLeft:25}}>
                <Button onClick={this.addShop.bind(this)}>新增</Button>
              </Col>
          </Row>
        </div>
        {/* 这里的rowKey 一定要加，否则会报错 */}
        <Table columns={columns} rowKey="_id" dataSource={goodArr}
          pagination={
            {
              total:goodArr.total,
              defaultPageSize:3,
              showSizeChanger:true,
              pageSizeOptions:["2","3","4","5","10"],
              showQuickJumper:true,
              onChange:this.pageChange.bind(this),
              onShowSizeChange:this.sizeChange.bind(this)
            }
          }
        />

        <Modal
          title="修改商品"
          visible={visible}
          onOk={this.modelBtnClick.bind(this,"ok")}
          onCancel={this.modelBtnClick.bind(this,"cancel")}>
          <p>{row.name}</p>
        </Modal>

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    goodArr:state.good.goodArr
  }
}
function mapActionToProps(dispatch){
return{
    getGoods:(params)=>dispatch(getGood(params))
}
}

export default connect(mapStateToProps,mapActionToProps)(Good)