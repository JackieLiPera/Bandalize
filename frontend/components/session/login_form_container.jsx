import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom';


export const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Log In"
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className="other-form-button" onClick={() => dispatch(openModal('signup'))}>
        Create New Account
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(msp, mdp)(SessionForm);
