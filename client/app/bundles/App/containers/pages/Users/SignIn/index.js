import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';

class HelloWorld extends Component {
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


  render() {
    return (
      <div>
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
      </div>
    );
  }
}


export default connect()(HelloWorld);
