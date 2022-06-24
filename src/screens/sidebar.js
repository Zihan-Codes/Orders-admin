import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../screens/orderstyle.css';

import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
  } from "@trendmicro/react-sidenav";


class SideNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: true
      };
    }
  
    render() {
      return (
        <div className="cont">
          <SideNav expanded={this.state.isVisible}>
          <SideNav.Toggle
          
            onClick={() => {
              this.setState({ isVisible: !this.state.isVisible });
            }}
          />
          <SideNav.Nav defaultSelected="order1">
            <NavItem eventKey="order1">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Pending Orders</NavText>
            </NavItem>
            <NavItem eventKey="ongoing orders">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Ongoing Orders</NavText>
            </NavItem>

            <NavItem eventKey="completed orders">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Completed Orders</NavText>
            </NavItem>

          </SideNav.Nav>
        </SideNav>
        </div>
      );
    }
  }
  
  export default SideNavBar;