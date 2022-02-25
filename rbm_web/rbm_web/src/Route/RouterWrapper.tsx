/*
 * @Author: mujin
 * @Date: 2022-02-25 09:28:50
 * @LastEditTime: 2022-02-25 09:40:24
 * @Description: 
 */

import React from 'react';
import DocumentTitle from "react-document-title";


const RouterWrapper = (props: any) => {
  let { Comp, route, ...restProps } = props;
  return (
    <DocumentTitle title={route.title}>
      <Comp></Comp>
    </DocumentTitle>
  );
}
export default RouterWrapper;