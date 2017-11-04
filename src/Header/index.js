import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm'
import { Jumbotron } from 'react-bootstrap';


const Header = props =>
  <Jumbotron>
    <header>
      <h1>RSVP</h1>
      <br/>
      <GuestInputForm
        newGuestSubmitHandler = {props.newGuestSubmitHandler}
        pendingGuest = {props.pendingGuest}
        handleNameInput = {props.handleNameInput}
      />
    </header>
  </Jumbotron>

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
}

export default Header;
