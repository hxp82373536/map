import React, {Component} from "react"
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import './Header.css'

class Header extends Component {
  render() {
    return (<div className="header-css ">
			<Row>
				<Col span={2}>
					<img style={{
							height: 50,
							width: 70
						}} src={require('./home.png')}/>
				</Col>
				<Col span={21}>
					<ul className="nav-top">
						<li><Link to="/">首页</Link></li>
						<li><Link to="/maps">Map信令</Link></li>
						<li><Link to="/message">短信分析</Link></li>
						<li><Link to="/monitor">监控预警</Link></li>
					</ul>
				</Col>
			</Row>


    </div>)
  }
}

export default Header
