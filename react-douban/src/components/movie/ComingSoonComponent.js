import React from 'react'
import { Spin, Alert,Row, Col,Rate } from 'antd';
//导入组件的方式导入fetchJsonp组件
import fetchJsonp from 'fetch-jsonp'
export default class ComingSoonComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			movieList:[{title:'泰坦尼克号',year:1999}],
			isLoaded:false//数据是否加载完毕 默认是false
		}
	}
	//生命周期的函数 会在渲染render方法之前调用的函数 
	componentWillMount(){
		var that = this;
		//延迟1秒发送请求
		setTimeout(function () {
			fetchJsonp('https://api.douban.com/v2/movie/coming_soon')
			.then((res) => {
				 return res.json();
			}).then((data) => {
				that.setState({
					movieList:data.subjects,
					isLoaded:true
				})
				console.log(that.state.movieList);
			})
		}, 1000)
	}
	//当组件被卸载的时候去销毁状态
	componentWillUnmount(){
	    this.setState = (state,callback)=>{
	      return;
	    };
	}
	render(){
		//数据还没有加载完毕显示加载中效果
		if(this.state.isLoaded == false){
				return <Spin tip="加载中...">
		    <Alert
		      message="温馨提示"
		      description="正在拼命加载数据......"
		      type="info"
		    />
		  </Spin>
		}else{
			return <div className="list">
				 <Row gutter={16}>
				 	{
				 		this.state.movieList.map((item,i) => (
				 					<Col span={6} key={i}>
							      	<div>
							      		<img src={item.images.small} alt=""/>
							      		<p>名称：{item.title}</p>
							      		<p>电影类型：{item.genres.join('、')}</p>
							      		<p>年份：{item.year}</p>

							      		<div>评分：<Rate allowHalf disabled defaultValue={parseInt(item.rating.average)/2} /></div>
							      	</div>
							     </Col>
				 			))
				 	}
			      
			    </Row>
			</div>
		}
		
	}
}