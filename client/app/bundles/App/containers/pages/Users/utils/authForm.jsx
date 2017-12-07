import React, { Component } from 'react';
import { connect } from 'react-redux';


const Functions = {
  getMetaContent(name) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i += 1) {
      if (metas[i].getAttribute('name') === name) {
        return metas[i].getAttribute('content');
      }
    }
    return '';
  },
};
class AuthForm extends Component {
  render() {
    return (
      <form
        className="new_user"
        id="new_user"
        action={this.props.action}
        acceptCharset="UTF-8"
        method="post"
        _lpchecked="1"
      >
        <input
          type="hidden"
          name="authenticity_token"
          value={Functions.getMetaContent('csrf-token')}
        />
        {this.props.children}
      </form>
    );
  }
}


export default connect()(AuthForm);
