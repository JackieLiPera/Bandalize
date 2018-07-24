import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

export const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Sign Up"
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="other-form-button" onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
