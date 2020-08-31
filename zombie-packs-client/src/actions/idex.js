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

export const fetchSecondaryWeapons = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SECONDARYWEAPONS })
    fetch('http://localhost:3001/secondary_weapons')
      .then(res => res.json()) 
      .then(secondaryWeapons => {
        dispatch({
          type: RECEIVE_SECONDARYWEAPONS, 
          payload: secondaryWeapons
        })
      })   
  }
} 
export const fetchTacticalItems = () => {
  return dispatch => {
    dispatch({ type: FETCHING_TACTICALITEMS })
    fetch('http://localhost:3001/tactical_items')
      .then(res => res.json()) 
      .then(tacticalItems => {
        dispatch({
           type: RECEIVE_TACTICALITEMS, 
           payload: tacticalItems
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

export const addPrimaryWeapon = primaryWeapon => {
  return dispatch => {
    return fetch('http://localhost:3001/primary_weapons', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(primaryWeapon)
    })
      .then(res => res.json())
      .then(primaryWeapon => {
        dispatch({
          type: ADD_PRIMARYWEAPON,
          payload: primaryWeapon
        })   
      })
  }
} 

export const addSecondaryWeapon = secondaryWeapon => {
  return dispatch => {
    return fetch('http://localhost:3001/secondary_weapons', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(secondaryWeapon)
    })
      .then(res => res.json())
      .then(secondaryWeapon => {
        dispatch({
          type: ADD_SECONDARYWEAPON,
          payload: secondaryWeapon
        })
      })
  }
} 

export const addLethalWeapon = lethalWeapon => {
  return dispatch => {
    return fetch('http://localhost:3001/lethal_weapons', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(lethalWeapon)
    })
      .then(res => res.json())
      .then(lethalWeapon => {
        dispatch({
          type: ADD_LETHALWEAPON,
          payload: lethalWeapon
        })
      })
  }
} 

export const addTacticalItem = tacticalItem => {
  return dispatch => {
    return fetch('http://localhost:3001/tactical_items', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tacticalItem)
    })
      .then(res => res.json())
      .then(tacticalItem => {
        dispatch({
          type: ADD_TACTICALITEM,
          payload: tacticalItem
        })
      })
  }
}


export const fetchTacticalPackagebyId = (id) => {
  return dispatch => {
    dispatch({ type: FETCHING_TACTICALPACKS }) 
    return fetch(`http://localhost:3001/tactical_packages/${id}`)
      .then(res => res.json()) 
      .then(tacticalPackage => {
        dispatch({
          type: RECEIVE_TACTICALPACKS, 
          payload: [tacticalPackage]
        })
      })  
  } 
}

export const fetchPrimaryWeapons = () => {
  return dispatch => {
    dispatch({type:FETCHING_PRIMARYWEAPONS})
    fetch('http://localhost:3001/primary_weapons')
      .then(res => res.json())
      .then(primaryWeapons => {
        dispatch({
          type: RECEIVE_PRIMARYWEAPONS, 
          payload: primaryWeapons
        })
      })
  }
} 

export const fetchLethalWeapons = () => {
  return dispatch => {
    dispatch({type:FETCHING_LETHALWEAPONS})
    fetch('http://localhost:3001/lethal_weapons')
      .then(res => res.json())
      .then(lethalWeapons => {
        dispatch({
          type: RECEIVE_LETHALWEAPONS, 
          payload: lethalWeapons
        })
      })
  }
}