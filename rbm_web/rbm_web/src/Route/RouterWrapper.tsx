/*
 * @Author: mujin
 * @Date: 2022-02-25 09:28:50
 * @LastEditTime: 2022-03-22 15:00:33
 * @Description: 
 */
import DocumentTitle from "react-document-title";


const RouterWrapper = (props: any) => {
  let { Comp, route } = props;
  return (
    <DocumentTitle title={route.title}>
      <Comp></Comp>
    </DocumentTitle>
  );
}
export default RouterWrapper;