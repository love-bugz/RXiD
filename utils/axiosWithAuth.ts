// Third party HTTP request library
import axios from 'axios';

// Storage on the device
import AsyncStorage from '@react-native-community/async-storage';

// EXPORTED FUNCTION-- AN AXIOS INSTANCE
const axiosWithAuth = async () => {
  // check for user token
  const userToken = await AsyncStorage.getItem('userToken');
  // set base URL for requests
  const baseURL = '???';
  // return the axios instance, including retrieved auth token
  return axios.create({
    baseURL,
    headers: { Authorization: userToken },
  });
};

export default axiosWithAuth;
