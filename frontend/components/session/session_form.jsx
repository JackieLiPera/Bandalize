import React from 'react';
import { withRouter } from 'react-router-dom';

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
    let button = this.props.processForm;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label> Email
            <input type="text" onChange={this.handleEmailChange} value={this.state.email} />
          </label>


          <label> Password
            <input type="password" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>

          <button onClick={button}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
