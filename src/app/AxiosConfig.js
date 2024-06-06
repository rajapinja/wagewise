import axios from 'axios';
import { Alert } from 'react-native';
import { BASE_URL } from '../app/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createAxiosInstance = (navigation) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        // Other default headers like Authorization can also be added here
      },
  });

  const interceptResponse = async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken) {
          navigation.navigate('LoginScreen');
          Alert.alert('Token Expired', 'Please login again.');
        }
      } catch (error) {
        console.error('Error navigating:', error);
      }
    }
    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(async (config) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken != null) {
        config.headers.Authorization = `Bearer ${accessToken.trim()}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    interceptResponse
  );

  return axiosInstance;
};

export default createAxiosInstance;
