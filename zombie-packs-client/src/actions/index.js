export const FETCHING_TACTICALPACKS = "FETCHING_TACTICALPACKS"
export const RECEIVE_TACTICALPACKS = "RECEIVE_TACTICALPACKS"
export const FETCHING_PRIMARYWEAPONS = "FETCHING_PRIMARYWEAPONS"
export const RECEIVE_PRIMARYWEAPONS = "RECEIVE_PRIMARYWEAPONS" 
export const FETCHING_SECONDARYWEAPONS = "FETCHING_SECONDARYWEAPONS"
export const RECEIVE_SECONDARYWEAPONS = "RECEIVE_SECONDARYWEAPONS" 
export const FETCHING_LETHALWEAPONS = "FETCHING_LETHALWEAPONS" 
export const RECEIVE_LETHALWEAPONS = "RECEIVE_LETHALWEAPONS" 
export const FETCHING_TACTICALITEMS = "FETCHING_TACTICALITEMS" 
export const RECEIVE_TACTICALITEMS = "RECEIVE_TACTICALITEMS" 
export const ADD_TACTICALPACK = "ADD_TACTICALPACK" 
export const ADD_PRIMARYWEAPON = "ADD_PRIMARYWEAPON" 
export const ADD_SECONDARYWEAPON = "ADD_SECONDARYWEAPON" 
export const ADD_LETHALWEAPON = "ADD_LETHALWEAPON" 
export const ADD_TACTICALITEM = "TACTICALITEM" 
export const DELETE_TACTICALPACK = "DELETE_TACTICALPACK" 

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



export const addTacticalPackage = tacticalPackage => {
  return dispatch => {
    return fetch('http://localhost:3001/tactical_packages', {
        method: "POST",
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(tacticalPackage)
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

