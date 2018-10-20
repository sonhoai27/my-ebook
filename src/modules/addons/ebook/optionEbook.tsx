import * as React from "react";
import OrderEbook from "./orderEbook"
import axios from 'axios'
import { API } from "../../../config/const";
interface IState {
  isShowingModalOrder: boolean;
  currentPackage: number;
  price: number;
  listPackage: any;
}
class OptionEbook extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModalOrder: false,
      currentPackage: -1,
      price: 0,
      listPackage: []
    };
  }
  componentDidMount(){
    axios.get(API+'package-ebook')
    .then(result => {
      this.setState({
        listPackage: result.data.list
      })
    })
  }
  renderListPackage = ()=> {
    return this.state.listPackage.map(element => {
      const price = Number(element.package_ebook_price)
      return (
        <div className="col-sm-3">
            <div className="pricing-option">
              <h1 style={{textTransform: 'uppercase'}}>{element.package_ebook_name}</h1>
              <hr />
              <p dangerouslySetInnerHTML={{__html: element.package_ebook_content}}/>
              <hr />
              <div className="price">
                <div className="front">
                  <span className="price">{price.toLocaleString('VN')}đ/cuốn</span>
                </div>
                <div className="back">
                  <a
                    className="button"
                    onClick={() => {
                      this.setState({
                        currentPackage: element.package_ebook_id,
                        price: 105000,
                        isShowingModalOrder: !this.state.isShowingModalOrder
                      });
                    }}
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
      )
    })
  }
  render() {
    return (
      <>
        <div className="row pricing-table">
          {this.renderListPackage()}
        </div>
        {this.state.isShowingModalOrder ? (
          <OrderEbook
            package={this.state.currentPackage}
            price={this.state.price}
            exit={() => {
              this.setState({
                isShowingModalOrder: !this.state.isShowingModalOrder
              });
            }}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default OptionEbook;
