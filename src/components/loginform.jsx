import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"></label>
            <input
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
              value={account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              value={account.password}
              type="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
