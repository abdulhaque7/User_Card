// actions/userActions.js

import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users', userData);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
  }
};

// Define actions for updating and deleting users as needed
