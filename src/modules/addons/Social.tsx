import * as React from "react";

class Social extends React.Component {
  render() {
    return (
    <>
    <button className="collapsible">KẾT NỐI VỚI TÔI</button>
      <div className="collapsible-content">
        <ul className="list-icons-social">
          <li>
            <a href="">
              <i className="icon-social-facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="icon-social-youtube" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="icon-social-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </>
    );
  }
}
export default Social;
