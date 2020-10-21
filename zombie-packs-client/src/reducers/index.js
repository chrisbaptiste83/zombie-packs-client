import { combineReducers } from 'redux'
import { 
  RECEIVE_TACTICALPACKS,
  ADD_TACTICALPACK, 
  FETCHING_TACTICALPACKS,
  SIGNUP,
  LOGGED_IN,
  LOGIN,
  FAILED_SIGNUP,
  FAILED_LOGIN,
  LOGGED_OUT,
  LOGOUT,
  UPLOAD_PHOTO,
  DELETE_USER
} from '../actions';

const tacticalPackages = (state = {
  items: [], 
  loading: false 
}, action) => { 
  const { payload, items, type } = action; 

  switch(type) {
    case FETCHING_TACTICALPACKS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_TACTICALPACKS: 
      return { 
        items: payload
      } 
    case ADD_TACTICALPACK: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }
    case 'DELETE_TACTICALPACK':
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };   
    default:
      return state;
  } 
}

const usersReducer = (
  state = {
    status: false,
    user: {},
    profile: {},
    users: [],
    emailError: "",
    usernameError: "",
    passwordError: "",
    passwordConfirmationError: "",
  },
  action
) => {
  const {
    payload,
    emailError,
    passwordError,
    passwordConfirmationError,
    usernameError,
    user,
    users,
    type,
  } = action;
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        status: true,
        user: payload,
      };

    case FAILED_SIGNUP:
      return {
        ...state,
        emailError: emailError[0],
        usernameError: usernameError,
        passwordError: passwordError,
        passwordConfirmationError: passwordConfirmationError,
      };
      
      case LOGIN:
        return {
          ...state,
          status: true,
          user: user,
        };
  
      case LOGGED_IN:
        return {
          ...state,
          status: true,
          user: user,
        };
    
    case FAILED_LOGIN:
      return {
        ...state,
        emailError: emailError,
        passwordError: passwordError,
      }; 

    case UPLOAD_PHOTO:
      return {
        ...state,
        status: true,
        user: payload,
      };

    case LOGGED_OUT:
      return {
        ...state,
        status: false,
        user: {},
      };

    case LOGOUT:
      return {
        status: false,
        user: {},
      };

    case DELETE_USER:
      return {
        ...state,
        status: false,
        user: {},
      };

    default: {
      return state;
    }
  }
};



const rootReducer = combineReducers({
  tacticalPackages,
  usersReducer
}) 

export default rootReducer; 
