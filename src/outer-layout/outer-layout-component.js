import React, { Component } from 'react';
import OuterHeaderComponent from './outer-header/outer-header-component';
import OuterBodyComponent from './outer-body/outer-body-component';
import OuterFooterComponent from './outer-footer/outer-footer-component';


class OuterLayoutComponent extends Component {
  render() {
    return (
      <div className="OuterLayoutComponent">
        <p>This is Outer Layout Component</p>
        <OuterHeaderComponent />
        <OuterBodyComponent />
        <OuterFooterComponent />
      </div>
    );
  }
}

export default OuterLayoutComponent;
