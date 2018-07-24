import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal)
  }

  handleFNameChange(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  handleLNameChange(e) {
    this.setState({
      lastname: e.target.value
    });
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

    if (this.props.formType === 'Sign Up') {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <span className="session-title" >{this.props.formType}</span>
            <ul className='form-list'>
              <li className="session-input">
                <label>First Name</label>
                <input className="input-box" type="text" onChange={this.handleFNameChange} value={this.state.firstname} />
              </li>
              <li className="session-input">
                <label>Last Name</label>
                <input className="input-box" type="text" onChange={this.handleLNameChange} value={this.state.lastname} />
              </li>
              <li className="session-input">
                <label>Email</label>
                <input className="input-box" type="text" onChange={this.handleEmailChange} value={this.state.email} />
              </li>


              <li className="session-input">
                <label>Password</label>
                <input className="input-box" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
              </li>

              <li className="session-buttons">
                <span className="session-errors">{this.props.errors}</span>
                <button className="session-button">{this.props.formType}</button>
                <span>{this.props.otherForm}</span>
              </li>
            </ul>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <span className="session-title" >{this.props.formType}</span>
            <ul className='form-list'>
              <li className="session-input">
                <label>Email</label>
                <input className="input-box" type="text" onChange={this.handleEmailChange} value={this.state.email} />
              </li>


              <li className="session-input">
                <label>Password</label>
                <input className="input-box" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
              </li>

              <li className="session-buttons">
                <span className="session-errors">{this.props.errors}</span>
                <button className="session-button">{this.props.formType}</button>
                <span>{this.props.otherForm}</span>
              </li>
            </ul>
          </form>
        </div>
      )
    };
  }
}

export default withRouter(SessionForm);
