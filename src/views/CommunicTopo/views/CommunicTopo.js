import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../reducer'
import { Button,Input, message,Row,Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import Table from '../../../common/component/table/table'
const InputGroup = Input.Group;


const {RangePicker} = DatePicker;
const Search = Input.Search;
const Option = Select.Option;


let param = {
  startTime: "",
  endTime: "",
  signallingBus: "",
  table: "",
  column: "",
  keyWord: ""
}
class CommunicTopo extends React.PureComponent {
  componentDidMount() {
    // this.props.loadSignalling(param);
    this.error();
  }

  error() {
    if (this.props.error)
      message.error('This is a message of error');
    }

  onTime(datas, dateStrings) {
    param.startTime = dateStrings[0];
    param.endTime = dateStrings[1];
  }

  onSearch(value) {
    param.keyWord = value;
    this.props.loadSignalling(param);
    this.error();
  }

  onBus(value) {
    param.keyWord = value;
  //  this.props.loadSignalling(param);
    this.error();
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={7}>
            <RangePicker format="YYYY-MM-DD HH:mm" onChange={this.onTime.bind(this)}/>
          </Col>
          <Col span={7}>
            <InputGroup compact style={{ width: 500 }}>
               <Select defaultValue="手机号码" onChange={this.onBus.bind(this)}>
                 <Option value="手机号码">手机号码</Option>
                 <Option value="IMEI号">IMEI号</Option>
               </Select>
               <Input style={{ width: '50%' }} placeholder="请输入手机号码或IMSI号码" />
            </InputGroup>
          </Col>
          <Col span={6}>
            <Button type="primary" icon="search">Search</Button>
          </Col>
        </Row>
        <Row>
        <Col span={12}>
          <Row>
            <h1>拓扑图分析</h1>
          </Row>
          <Row>
          </Row>
        </Col>
        <Col span={12}>
            <Table ></Table>
        </Col>
      </Row>
      </div>
    );
  }
}

export default  CommunicTopo
// connect(state => ({
//   total: state.SignallingCheck.total,
//   result: state.SignallingCheck.result,
//   detail_result: state.SignallingCheck.detail_result,
//   loading: state.SignallingCheck.table_status.loading,
//   error: state.SignallingCheck.table_status.error,
//   modalVisible: state.SignallingCheck.detail_status.modalVisible
// }), dispatch => bindActionCreators(ActionCreators, dispatch))(CommunicTopo)
