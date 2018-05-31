import {hot} from 'react-hot-loader'
import Header from '../common/component/header/Header'
import Home from './Home/Home'
import Sign from './SignallingAnalyse/index'
import CommunicTopo from './CommunicTopo/index'
import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


const Wait = () => <h3>wait to dev</h3>;

const Maps = ({routes}) => (<div>
  <ul>
    <li>
      <Link to="/maps/1">用户维度信息</Link>
    </li>
    <li>
      <Link to="/maps/2">用户通联拓扑分析</Link>
    </li>
    <li>
      <Link to="/maps/3">中间人推荐</Link>
    </li>
    <li>
      <Link to="/maps/4">中间人分析</Link>
    </li>
    <li>
      <Link to="/maps/5">Map信令统计</Link>
    </li>
  </ul>
  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
</div>);

const Message = () => <h3>短信,wait to dev</h3>;

const Monitor = ({routes}) => (<div>
  <ul>
    <li>
      <Link to="/monitor/1">目标实时监控</Link>
    </li>
    <li>
      <Link to="/monitor/2">区域实时分析</Link>
    </li>
  </ul>
  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
</div>);

const routes = [
  {
  path: "/maps",
	component: Maps,
	routes: [{
		path: "/maps/1",
		component: Sign,
    exact:true
	}, {
		path: "/maps/2",
		component: CommunicTopo
  }, {
		path: "/maps/3",
		component: Wait
  }, {
    path: "/maps/4",
    component: Wait
  }, {
    path: "/maps/5",
    component: Wait
  }]
},{
  path: "/message",
	component: Message
},{
  path: "/monitor",
	component: Monitor,
  routes: [{
		path: "/monitor/1",
		component: Wait
	}, {
		path: "/monitor/2",
		component: Wait
  }]
}];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (<route.component {...props} routes={route.routes}/>)}
  />
);

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route path="/" component={Home} exact/>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
    </div>
  </Router>
);

export default hot(module)(App)
