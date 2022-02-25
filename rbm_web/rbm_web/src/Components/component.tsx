/*
 * @Author: mujin
 * @Date: 2022-02-24 11:03:40
 * @LastEditTime: 2022-02-25 16:40:35
 * @Description: 
 */

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../Redux/action';

const Component = (props: any) => {

  let { setToken } = props;
  console.log(props);


  useEffect(() => {
    console.log(setToken);

    setToken("qweqweqwe");
  })

  return (<div>
    wqeqwe12312312312
    <div>token:{props.token || ''}</div>
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

export default connect(mapStateToPropss, mapDispatchToProps)(Component);
