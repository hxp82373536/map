import {combineReducers } from 'redux'
import SignallingCheck from './SignallingAnalyse/reducer'

// 定义reducer
// 每个组件自己的reducer负责维护自己的状态, 注意key的名字和组件名一致
const reducers= combineReducers({
   SignallingCheck: SignallingCheck.reducer
});

// 整体的初始状态
// 就是把每个组件自己的初始状态组合起来, 注意key的名字和组件名一致
const initState = {
  SignallingCheck: SignallingCheck.initialState
};

export {reducers,initState}
