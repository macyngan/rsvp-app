import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const GuestInputForm = props =>
  <form onSubmit={props.newGuestSubmitHandler}>
    <input
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingGuest}
      placeholder="Invite Someone" />
    <Button bsStyle="info" bsSize="large" type="submit" name="submit" value="submit">Submit</Button>
  </form>

GuestInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
}

export default GuestInputForm
