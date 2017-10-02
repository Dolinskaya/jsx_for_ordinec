
import {
  SET_FORM,
  SEND_FORM,
  SEND_FORM_SUCCESS,
  SEND_FORM_FAIL
} from '../../constants/User.js';

const initialState = {
  form: {
    email: '',
    password: '',
    name: '',
    repeatPassword: '',
  },

  formSent: false,
};
export default function formstate(state = initialState, action) {

  switch (action.type) {

    case SET_FORM:
      return {...state,
      form: {
          ...state.form,
          ...action.data
      }
    }

    case SEND_FORM:
      return {...state, formSent: false}

    case SEND_FORM_SUCCESS:
      return {...state,
        form: {
          ...initialState.form
        },
        formSent: true
      }

    case SEND_FORM_FAIL:
      return {...state,
        formSent: false}

    default:
      return state
    }
}