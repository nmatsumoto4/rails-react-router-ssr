import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import AuthForm from '../utils/authForm';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      <AuthForm action="/users/sign_in">

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
        <FormControlLabel
          control={
            <Checkbox
              name="user[remember_me]"
              checked={this.state.remember_me}
              onChange={this.onChangeCheckBox.bind(this, 'remember_me')}
              value={this.state.remember_me ? 0 : 1}
            />
          }
          label="Remenber me"
        />
        <Button
          color="primary"
          raised
          type="submit"
        >
          ログイン
        </Button>
      </AuthForm>
    );
  }
}


export default connect()(SignIn);
