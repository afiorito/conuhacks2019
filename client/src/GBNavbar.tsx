import React from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';
import './GBNavbar.scss';

interface IGBNavbarState {
  isOpen: boolean;
}

export class GBNavbar extends React.Component<{}, IGBNavbarState>  {
  constructor(props: object) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public render() {
    return (
      <div>
        <Navbar className="GBNavbar" expand="md">
          <NavbarBrand href="/">Green Beans</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
