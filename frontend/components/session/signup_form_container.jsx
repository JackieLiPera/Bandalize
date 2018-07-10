import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

export const msp = (state) => ({
  errors: state.errors,
  formType: "signup"
});

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
