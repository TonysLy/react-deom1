import React from 'react'
import { Layout,Menu } from 'antd';
// 导入路由的组件
import {
  BrowserRouter as Router,//给BrowserRouter 取别名
  Route,
  Link
} from 'react-router-dom'
import InTheatersComponent from './InTheatersComponent'
import ComingSoonComponent from './ComingSoonComponent'
import Top250Component from './Top250Component'
const { Header, Footer, Sider, Content } = Layout;

export default class MovieListComponent extends React.Component{
	render(){
		return(
			 <Router>
			 	<Layout>
			 		<Sider>
					 	<Menu
				        style={{ width: 200 }}
				        defaultSelectedKeys={['1']}
				        mode="inline"
				      >
				      	 <Menu.Item key="1"><Link to="/movie/in_theaters">正在热映</Link></Menu.Item>
				          <Menu.Item key="2"><Link to="/movie/coming_soon">即将上映</Link></Menu.Item>				        
				          <Menu.Item key="3"><Link to="/movie/top250">top250</Link></Menu.Item>				        
				      </Menu>
					 </Sider>
		        	<Content className="movielist-content">
		        	 			<Route exact path="/movie/in_theaters" component={InTheatersComponent}/>
					     		<Route exact path="/movie/coming_soon" component={ComingSoonComponent}/>
					     		<Route exact path="/movie/top250" component={Top250Component}/>
		        	</Content>
			 </Layout>
			</Router>
	  	)
	}
}