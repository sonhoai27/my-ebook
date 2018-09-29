import * as React from "react";
import { LoadingPage } from "./addons/LoadingPage";
import Ebook from "./addons/ebook/ebook";
import { connect } from "react-redux";
import NotifyDanger from "./shared/notifyDanger";
import NotifySuccess from "./shared/notifySuccess";
interface IProps {
  isSuccess: any;
  isDanger: any;
}
class App extends React.Component<IProps, {}>{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.reCheckLogin();
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("ui-loading").style.display = "none";
    },1500);
  }
  render() {
    return (
      <>
        <div className="margin-top">
          <Ebook/>
        </div>
        <div id="ui-loading">
          <LoadingPage />
        </div>
        <div className="jq-toast-wrap top-right">
        {this.props.isDanger ? <NotifyDanger/> : ""}
        {this.props.isSuccess ? <NotifySuccess/> : ""}
        </div>
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger
});
const mapDispatchToProps = {
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
