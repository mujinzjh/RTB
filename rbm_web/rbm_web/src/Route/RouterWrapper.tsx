/*
 * @Author: mujin
 * @Date: 2022-02-25 09:28:50
 * @LastEditTime: 2022-03-24 10:13:16
 * @Description: 
 */
import DocumentTitle from "react-document-title";


const RouterWrapper = (props: any) => {
  let { Comp, route } = props;
  return (
    <DocumentTitle title={route.title + "-博记苑"}>
      <Comp {...props} children={route.children}></Comp>
    </DocumentTitle>
  );
}
export default RouterWrapper;