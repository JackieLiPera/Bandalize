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

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span className="session-title" >{this.props.formType}</span>
          <div className="session-input">
            <label>Email</label>
            <input className="input-box" type="text" onChange={this.handleEmailChange} value={this.state.email} />
          </div>


          <div className="session-input">
            <label>Password</label>
            <input className="input-box" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
          </div>

          <div className="session-buttons">
            <button className="session-button">{this.props.formType}</button>
            <span>{this.props.otherForm}</span>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
