import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import AuthForm from '../../utils/authForm';


class PasswordEdit extends Component {
  constructor(props) {
    super(props);
    const urlParam = window.location.search.substring(1);
    const paramArray = [];
    // URLにパラメータが存在する場合
    if (urlParam) {
      // 「&」が含まれている場合は「&」で分割
      const param = urlParam.split('&');
      // パラメータを格納する用の配列を用意
      // 用意した配列にパラメータを格納
      for (let i = 0; i < param.length; i += 1) {
        const paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
      }
    }

    this.state = {
      reset_password_token: paramArray.reset_password_token,
      password: '',
      password_confirmation: '',
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
        <input type="hidden" name="_method" value="put" />
        <input
          type="hidden"
          name="user[reset_password_token]"
          value={this.state.reset_password_token}
        />
        <TextField
          id="password"
          label="password"
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
          パスワードをリセット
        </Button>
      </AuthForm>
    );
  }
}


export default connect()(PasswordEdit);
