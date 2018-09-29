import * as React from "react";
import { LoadingPage } from "./client/client-shared/LoadingPage";
import Ebook from "./client/ebook/ebook";
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.reCheckLogin();
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("ui-loading").style.display = "none";
    }, 0);
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
      </>
    );
  }
}
export default App
