
import React from 'react';

import {MenuItem, NavDropdown} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';

import './board.visitor.menu.css';

export default () => {
  return <NavDropdown eventKey="4" title={<span><FontAwesome name='align-justify' size='2x'/></span>}
                      id="nav-dropdown">
    <MenuItem eventKey="1" >Sign In</MenuItem>
  </NavDropdown>;
};
