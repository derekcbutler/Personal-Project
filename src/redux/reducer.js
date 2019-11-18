import axios from "axios";

const initialState = {
  user: {
    loggedIn: false
  },
  leads: []
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";
const GET_LEADS = 'GET_LEADS';
const DELETE_LEADS = 'DELETE_LEADS';
const EDIT_LEAD = 'EDIT-LEAD';

export function getLeads() {
  // console.log('hit')
  let leads = axios.get('/api/leads').then(res => {
    console.log(res)
    return res.data})
    
  return {
    type: GET_LEADS,
    payload: leads
  }
}

export function editLead(id, name_first, name_last, phone, email, lead_status, notes) {
  console.log(id, name_first, name_last, phone, email, lead_status, notes)
  // console.log('edit', id)
  let leads = axios.put(`/api/leads/${id}`, {name_first, name_last, phone, email, lead_status, notes}).then(res => {
    return res.data
  })
  return {
    type: EDIT_LEAD,
    payload: leads
  }
}

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export const logout = () => {
  axios.delete("/api/logout");
  return {
    type: LOGOUT,
    payload: null
  };
};

export const login = () => {
  return {
    type: LOGIN,
    payload: null
  };
};

export const deleteLead = (id) => {
  let newLoad = axios.delete(`/api/leads/${id}`).then(res => res.data)
  // console.log(newLoad)
  return {
    type: DELETE_LEADS,
    payload: newLoad
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return { ...state, user: { payload, loggedIn: true } };
    case LOGOUT:
      return { ...state, user: { loggedIn: false } };
    case LOGIN:
      return { ...state, user: { loggedIn: true } };

    case GET_LEADS + '_FULFILLED':
      console.log('hit getLeads')
      return { ...state, leads: payload };
    case DELETE_LEADS + '_FULFILLED':
      console.log(payload)
        return { ...state, leads: payload };
    case EDIT_LEAD + '_FULFILLED':
      return { ...state, leads: payload };
    default:
      return state;
  }
}
