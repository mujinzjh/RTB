/*
 * @Author: mujin
 * @Date: 2022-02-25 09:28:50
 * @LastEditTime: 2022-03-23 14:25:11
 * @Description: 
 */
import DocumentTitle from "react-document-title";


const RouterWrapper = (props: any) => {
  let { Comp, route } = props;
  console.log(props);
  return (
    <DocumentTitle title={route.title}>
      <Comp {...props} children={route.children}></Comp>
    </DocumentTitle>
  );
}
export default RouterWrapper;