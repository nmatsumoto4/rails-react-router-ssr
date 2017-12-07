import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import AuthForm from '../../utils/authForm';


class PasswordNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  onChangeTextField(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }


  render() {
    return (
      <AuthForm action="/users/password">

        <TextField
          id="user_email"
          label="user_email"
          name="user[email]"
          value={this.state.email}
          onChange={this.onChangeTextField.bind(this, 'email')}
          margin="normal"
        />
        <Button
          color="primary"
          raised
          type="submit"
        >
          パスワードをリセット
        </Button>
      </AuthForm>
    );
  }
}


export default connect()(PasswordNew);
