import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    let button;

    if (this.props.formType === 'login') {
      button = <button>Log In</button>;
    } else {
      button = <button>Sign Up</button>
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label> Email
            <input type="text" onChange={this.handleEmailChange} value={this.state.email} />
          </label>


          <label> Password
            <input type="password" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>

          {button}
        </form>
      </div>
    );
  }
}

export default SessionForm;
