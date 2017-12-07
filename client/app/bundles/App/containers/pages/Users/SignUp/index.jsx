import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import AuthForm from '../utils/authForm';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  }
  onChangeTextField(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }
  onChangeCheckBox(name, event) {
    this.setState({ [name]: event.target.checked });
  }


  render() {
    return (
      <AuthForm action="/users" >
        <TextField
          id="user_email"
          label="user_email"
          name="user[email]"
          value={this.state.email}
          onChange={this.onChangeTextField.bind(this, 'email')}
          margin="normal"
        />
        <TextField
          id="user_password"
          label="user_password"
          name="user[password]"
          type="password"
          value={this.state.password}
          onChange={this.onChangeTextField.bind(this, 'password')}
          margin="normal"
        />
        <TextField
          id="user_password_confirmation"
          label="user_password_confirmation"
          name="user[password_confirmation]"
          type="password"
          value={this.state.password_confirmation}
          onChange={this.onChangeTextField.bind(this, 'password_confirmation')}
          margin="normal"
        />
        <Button
          color="primary"
          raised
          type="submit"
        >
          会員登録
        </Button>
      </AuthForm>
    );
  }
}


export default connect()(SignUp);
