import React from "react"


import {Layout} from "antd"
import QFHeader from "./QfHeader"
import QFSider from "./QfSider"
import QFContent from "./QfContent"

import "./style.scss"


const { Header, Sider, Content } = Layout

export default class QFLayout extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
        <Layout>
            <Sider width={170}>
                <QFSider></QFSider>
            </Sider>
            <Layout>
              <Header>
                  <QFHeader></QFHeader>
              </Header>
              <Content>
                  <QFContent></QFContent>
              </Content>
            </Layout>
          </Layout>
        )
    }
}