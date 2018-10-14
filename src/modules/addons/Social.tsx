import * as React from "react";

class Social extends React.Component {
  render() {
    return (
    <>
    <button className="collapsible">KẾT NỐI VỚI TÔI</button>
      <div className="collapsible-content">
          <ul className="list-icons-social margin-t-16">
            <li>
              <a
                style={{
                  background: '#009688',
                  color: '#fff'
                }}
                href="https://www.facebook.com/NguyenMinhChi.MrShare/"
                target="_blank"
              >
                <i style={{fontSize: 24}} className="icon-social-facebook" />
              </a>
            </li>
            <li>
              <a
              style={{
                background: '#009688',
                color: '#fff'
              }}
                href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                target="_blank"
              >
                <i style={{fontSize: 24}} className="icon-social-youtube" />
              </a>
            </li>
            <li>
              <a
              style={{
                background: '#009688',
                color: '#fff'
              }}
                href="https://www.facebook.com/groups/MatMaThoiSinhVien/"
                target="_blank"
              >
                <i style={{fontSize: 24}} className="icon-paper-plane" />
              </a>
            </li>
          </ul>
      </div>
    </>
    );
  }
}
export default Social;
