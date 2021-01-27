export const FETCHING_TACTICALPACKS = "FETCHING_TACTICALPACKS"
export const RECEIVE_TACTICALPACKS = "RECEIVE_TACTICALPACKS"
export const ADD_TACTICALPACK = "ADD_TACTICALPACK" 
export const DELETE_TACTICALPACK = "DELETE_TACTICALPACK" 
export const FAILED_SIGNUP = "FAILED_SIGNUP"
export const FAILED_LOGIN = "FAILED_LOGIN"
export const LOGGED_IN = "LOGGED_IN"
export const LOGGED_OUT = "LOGGED_OUT"
export const SIGNUP = "SIGNUP"
export const LOGOUT = "LOGOUT"
export const LOGIN = "LOGIN"
export const EDIT_PROFILE = "EDIT_PROFILE"
export const FETCH_PROFILE = "FETCH_PROFILE"
export const UPLOAD_PHOTO = "UPLOAD_PHOTO"
export const DELETE_USER = "DELETE_USER"

export const fetchTacticalPackages = () => {
  return dispatch => {
    dispatch({ type: FETCHING_TACTICALPACKS })
    fetch('http://localhost:3001/tactical_packages')
      .then(res => res.json()) 
      .then(tacticalPackages => { 
        dispatch({
          type: RECEIVE_TACTICALPACKS, 
          payload: tacticalPackages
        })
      })   
  }
} 



export const addTacticalPackage = formData => { 
  return dispatch => {
    return fetch('http://localhost:3001/tactical_packages', {
        method: "POST",
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) 
    })  
      .then(res => res.json()) 
      .then(tacticalPackage => { 
        dispatch({
          type: ADD_TACTICALPACK,
          payload: tacticalPackage
        }) 
        
        return tacticalPackage 
        
      }) 
  } 
} 
export const logoutUser = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/logout/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then(({ user }) => {
        dispatch({ type: LOGOUT, user: user }); 
      });
  };
}; 

export const sessionStatus = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/session/status', {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.logged_in === true
          ? dispatch({
              type: LOGGED_IN,
              user: data.user.data.attributes,
              interests: data.interests,
            })
          : dispatch({ type: LOGGED_OUT, payload: data });
      });
  };
};

export const loginUser = (formData, ownProps) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { 
        data.status !== 500
          ? 
          dispatch(
              {
                type: LOGIN,
                user: data.user.data.attributes,
                interests: data.interests,
              },
              ownProps.history.push(
                "/tactical_packages"              )
            )
          : dispatch(
              {
                type: FAILED_LOGIN,
                emailError: data.email_error,
                passwordError: data.passwordError,
              },
              ownProps.history.push("/log_in")
            );
      });
  };
};




export const signupUser = (formData, ownProps) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.status === 200
          ? dispatch(
              {
                type: SIGNUP,
                payload: data.user.data.attributes,
              },
              ownProps.history.push(
                `/`
              )
            )
          : dispatch(
              {
                type: FAILED_SIGNUP,
                usernameError: data.username_error,
                emailError: data.email_error,
                passwordError: data.passwordError,
                passwordConfirmationError: data.password_confirmation_error,
              },
              ownProps.history.push("/signup")
            );
      });
  };
};

// export const fetchTacticalPackagebyId = (id) => {
//   return dispatch => {
//     dispatch({ type: FETCHING_TACTICALPACKS }) 
//     return fetch(`http://localhost:3001/tactical_packages/${id}`)
//       .then(res => res.json()) 
//       .then(tacticalPackage => {
//         dispatch({
//           type: RECEIVE_TACTICALPACKS, 
//           payload: [tacticalPackage.data]
//         })
//       })  
//   } 
// } 

// export const fetchUserbyId = (id) => {
//   return dispatch => { 
//     dispatch({ type: FETCHING_USER }) 
//     return fetch(`http://localhost:3001/users/${id}`)
//       .then(res => res.json()) 
//       .then(user => {
//         dispatch({
//           type: FETCH_USER,
//           payload: user
//         })
//       })  
//   } 
// }

export const deleteTacticalPackage = (tacticalPackageId) => { 
  return dispatch => {
    return fetch(`http://localhost:3001/tactical_packages/${tacticalPackageId}`, {
      method: 'DELETE'
    }) 
    .then(tacticalPackage => { 
      dispatch({
        type: DELETE_TACTICALPACK,
        payload: [tacticalPackage]
      }) 
    }) 
  } 
}  

