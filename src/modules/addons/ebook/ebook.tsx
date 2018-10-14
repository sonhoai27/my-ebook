import * as React from "react";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import ItemPage from "../../DynamicPage/item";
import EbookPreview from "./preview";
import Customer from "./customer";
import OptionEbook from "./optionEbook";
import { reListPageUI } from "../../../reducers/init";
import Social from "../Social";
const IDPAGE = 5;
const listCom = {
  EBOOKPREVIEW: <EbookPreview />,
  CUSTOMER: <Customer />,
  ORDEREBOOK: <OptionEbook />,
  SOCIAL: <Social/>
};
interface IProps {
  resListPageUI: any;
  reListPageUI: (id: number) => void;
}
class EbookLadingPage extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalOrder: false,
      currentPackage: -1,
      price: 0
    };
  }
  componentDidMount() {
    this.props.reListPageUI(IDPAGE);
  }
  componentDidUpdate(preProps){
    const myToggle = e => {
      e.target.classList.toggle("active");
      var content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    var coll = document.getElementsByClassName("collapsible");
    var i;
    console.log(coll);
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", myToggle, false);
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <div className="col-xs-12 content-ebook">
          <ItemPage coms={listCom} items={this.props.resListPageUI.list} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resListPageUI: storeState.reInit.resListPageUI
});
const mapDispatchToProps = {
  reListPageUI
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EbookLadingPage);
