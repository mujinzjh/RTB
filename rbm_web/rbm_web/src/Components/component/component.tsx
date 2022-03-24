/*
 * @Author: mujin
 * @Date: 2022-02-24 11:03:40
 * @LastEditTime: 2022-03-23 16:47:28
 * @Description: 
 */

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../../Redux/action';
import { withRouter } from 'react-router-dom';
import history from '../../Utils/history';
import logo from '../../assets/imgs/logo.png'
import './index.scss'


const Component = (props: any) => {

  let { setToken } = props;
  console.log(props);


  const onHandleClick = (e: any) => {
    e.preventDefault();
    history.push('/Home/page2');
  }

  useEffect(() => {
    console.log(setToken);

    setToken("qweqweqwe");
  })

  return (<div>
    wqeqwe12312312312
    <div className='token'>
      <img src={logo} alt="" />
      <label>token:</label>
      <span>{props.token || ''}</span>
    </div>
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
