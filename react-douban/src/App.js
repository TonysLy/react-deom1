import React, { Component } from 'react';
import { Button } from 'antd';
// 引入antd的模板的组件
import { Layout, Menu, Breadcrumb } from 'antd';
// 导入路由的组件
import {
  BrowserRouter as Router,//给BrowserRouter 取别名
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import './App.less';
// 1. 导入首页的组件
import HomeComponent from './components/home/HomeComponent'
import MovieListComponent from './components/movie/MovieListComponent'
import AboutComponent from './components/about/AboutComponent'
// 创建变量的代码要放到所有的引包代码后面
const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	         <Layout className="layout">
					    <Header className="header">
					      <div className="logo" />
					      <Menu
					        theme="dark"
					        mode="horizontal"
					        defaultSelectedKeys={['1']}
					      >				      	 
					        <Menu.Item key="1" className="menu-item"><Link to="/">首 页</Link></Menu.Item>
					        <Menu.Item key="2" className="menu-item"><Link to="/movie">电 影</Link></Menu.Item>
					        <Menu.Item key="3" className="menu-item"><Link to="/about">关于</Link></Menu.Item>
					           
					      </Menu>
					    </Header>
					    <Content className="content">							        						    
					     		<Route exact path="/" component={HomeComponent}/>
					     		<Route exact path="/movie" component={MovieListComponent}/>
					     		<Route exact path="/about" component={AboutComponent}/>
					    </Content>
					    <Footer className="footer">
					      我的个人DOM ©2016 Created by zhengwei
					    </Footer>
				   
				</Layout>
	      </div>
	   </Router>
    );
  }
}

export default App;
