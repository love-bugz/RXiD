import { UserActionType, AppThunk, User, RootActionTypes, Reminder } from './store-types';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import { setAsyncStorageItems, removeAsyncStorageItems } from '../utils/asyncStorageFunctions';

// LOGIN ACTIONS
function setLogin(user: User): RootActionTypes {
  return {
    type: UserActionType.Login,
    payload: user,
  };
}

export const login = (user: User): AppThunk<void> => async dispatch => {
  try {
    const loggedInUser: User = await axios.post('???', { user });
    const { id, email, token } = loggedInUser;
    await setAsyncStorageItems([
      ['id', id as string],
      ['email', email as string],
      ['userToken', token as string],
    ]);
    dispatch(setLogin(loggedInUser));
  } catch (err) {
    throw err;
  }
};

// REGISTER ACTIONS
function setRegister(newUser: User): RootActionTypes {
  return {
    type: UserActionType.Register,
    payload: newUser,
  };
}

export const register = (user: User): AppThunk<void> => async dispatch => {
  try {
    const registeredUser: User = await axios.post('???', { user });
    const { id, email, token } = registeredUser;
    await setAsyncStorageItems([
      ['id', id as string],
      ['email', email as string],
      ['userToken', token as string],
    ]);
    dispatch(setRegister(registeredUser));
  } catch (err) {
    throw err;
  }
};

//LOGOUT ACTIONS
function userLogout(): RootActionTypes {
  return {
    type: UserActionType.Logout,
  };
}

export const logout = (): AppThunk<void> => async dispatch => {
  try {
    await removeAsyncStorageItems(['id', 'email', 'userToken']);
    dispatch(userLogout());
  } catch (err) {
    throw err;
  }
};

// FETCHING REMINDERS ACTIONS
function setReminders(reminders: Reminder[]): RootActionTypes {
  return {
    type: UserActionType.FetchReminders,
    payload: reminders,
  };
}

export const fetchUserReminders = (): AppThunk<void> => async dispatch => {
  try {
    const axiosCustom = await axiosWithAuth();
    const reminders: Reminder[] | [] = await axiosCustom.get('/reminders');
    dispatch(setReminders(reminders));
  } catch (err) {
    throw err;
  }
};
