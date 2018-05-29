import React, { Component } from 'react';
import InnerHeaderComponent from './inner-header/inner-header-component';
import InnerBodyComponent from './inner-body/inner-body-component';
import InnerFooterComponent from './inner-footer/inner-footer-component';


class InnerLayoutComponent extends Component {
  render() {
    return (
      <div className="InnerLayoutComponent">
        <p>This is Inner Layout Component</p>
        <InnerHeaderComponent />
        <InnerBodyComponent />
        <InnerFooterComponent />
      </div>
    );
  }
}

export default InnerLayoutComponent;
