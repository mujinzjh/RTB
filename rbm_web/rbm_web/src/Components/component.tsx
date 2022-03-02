/*
 * @Author: mujin
 * @Date: 2022-02-24 11:03:40
 * @LastEditTime: 2022-03-01 13:56:25
 * @Description: 
 */

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../Redux/action';
import { withRouter } from 'react-router-dom';

// const _history = createBrowserHistory();

const Component = (props: any) => {

  let { setToken } = props;
  console.log(props);
  // console.log(_history);

  // console.log(props);÷


  const onHandleClick = (e: any) => {
    e.preventDefault();
    props.history.push('/page2');
  }

  useEffect(() => {
    console.log(setToken);

    setToken("qweqweqwe");
  })

  return (<div>
    wqeqwe12312312312
    <div>token:{props.token || ''}</div>
    <button onClick={onHandleClick}>ceshi</button>
  </div>)
}

const mapStateToPropss = (state: any) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setToken(data: any) {
      dispatch(setToken(data))
    }
  }
}

export default withRouter(connect(mapStateToPropss, mapDispatchToProps)(Component));
