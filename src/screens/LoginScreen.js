import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL, PROJECT_NAME, CLIENT_ID, ISSUER } from '../app/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientBanner from '../components/Header';
import GradientButton from '../components/GradientButton';
import { useUserContext } from '../app/UserContext';
import backgroundImage from '../images/whitebg.jpg';
import Footer from '../components/Footer';


const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  // Assuming responseData is the JSON response from the login API
  const { setUser, setRole } = useUserContext();

  const navigation = useNavigation();

  useEffect(() => {
    // Clear error messages when the component is mounted or navigated back to
    const unsubscribe = navigation.addListener('focus', () => {
      setErrorMessages({});
    });

    return unsubscribe;
  }, [navigation]);


  const validateUsername = (text) => {
     // Define the pattern for allowed characters
     const allowedCharsPattern = /^[a-zA-Z0-9_-]+$/;    
    if (text.length < 4) {
      return 'Username must be at least 5 characters';
    }
    if(!allowedCharsPattern.test(text)){
      return 'username should not contain special characters';
    }
    return null; // No error
  };

  const validatePassword = (password) => {
    // Define the pattern for allowed characters
    const allowedCharsPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    
    // Check if the password matches the allowed pattern
    if (!allowedCharsPattern.test(password)) {
        return 'Password should only contain alphanumeric characters and special characters like !@#$%^&*()_-+=[]{};:\'"\\|,.<>/?';
    }
    
    // Check if the password meets the minimum length requirement
    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    
    // Check if the password contains at least one letter and one number
    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        return 'Password must contain at least one letter and one number';
    }
    
    // Additional checks (e.g., no repeating characters, no common patterns) can be added as needed
    
    // If the password passes all checks, return null to indicate no error
    return null;
};

  const handleLogin = async () => {

    const errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }
    const userError = validateUsername(username);
    if (userError) {
      errors.username = userError;
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      errors.password = passwordError;
    }
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
    } else {

      try {
        await axios.post(`${BASE_URL}/api/userlogin`, {
          username: username,
          password: password,
        }).then(response => {

          console.log('Login Successful', response.data.message);
          console.log("User :", response.data.user);
          console.log("Role :", response.data.role);

          // Get the current timestamp
          const loginTime = new Date().getTime().toString();
          // Set the login time in AsyncStorage
          AsyncStorage.setItem('loginTime', loginTime);

          setPassword('');
          setUsername('');
          setUser(response.data.user);
          setRole(response.data.role);

          // Define the key-value pairs you want to set
          //  trim any white spaces          
          const keyValues = [
            { key: 'accessToken', value: response.data.accessToken },
            { key: 'loginTime', value: loginTime },
            { key: 'user', value: username },
          
          ];

          const setItemPromises = keyValues.map(async ({ key, value }) => {
            try {
              await AsyncStorage.setItem(key, value);
              console.log(`Successfully set ${key}`);
              return true; // Return a resolved promise for success
            } catch (error) {
              console.error(`Error setting ${key}:`, error);
              return false; // Return a rejected promise for failure
            }
          });

          // Wait for all promises to complete
          Promise.all(setItemPromises)
            .then((results) => {
              // Check if all promises succeeded
              if (results.every((result) => result)) {
                console.log('All items set successfully.');
                //navigation.navigate('Menu'); 
                navigation.navigate('Employee');
              } else {
                console.error('Some items failed to be set.');
                // Handle partial failure here if needed
              }
            })
            .catch((error) => {
              console.error('Error setting items:', error);
            });

            const oAuthConfig = {
              issuer: {ISSUER},
              clientId: {CLIENT_ID},
              redirectUrl: 'scorerecorder://oauth2redirect',
              scopes: ['openid', 'profile'],
              additionalParameters: {
                prompt: 'consent',
              },
            };
            
            const oAuthResponse = authorize(oAuthConfig);
          
        }).catch(async error => {
          setPassword('');
          setUsername('');
          // Handle error, including password expiration error to reset password
          // console.log("/Login - error");
          // console.error("error :", error.response.data.error);

          // Store error and relevant data in AsyncStorage
          await AsyncStorage.setItem('error', error.response.data.error);
          await AsyncStorage.setItem('user', error.response.data.user);
          await AsyncStorage.setItem('expiration_time', error.response.data.expiration_time.toString());

          // Redirect to password reset screen or handle as needed            
          const currentTime = new Date().getTime(); // Get current time in milliseconds
          const expirationTime = new Date(error.response.data.expiration_time).getTime(); // Convert expiration_time to milliseconds
          //console.log('expirationTime:', expirationTime);

          const daysDifference = Math.floor((currentTime - expirationTime) / (1000 * 60 * 60 * 24));
          console.log(" daysDifference  :", daysDifference );

          // Password has expired, show link (. 45 days or redirect to reset screen up to 45 days
          if (daysDifference > 45) {
            console.log(" daysDifference  > 45 - email link to reset :", daysDifference > 45 );
            reset_password(username);
          } else {
            console.log(" daysDifference  <= 45 - redirected to ResetPasswordScreen :", daysDifference  <= 45 );
            navigation.navigate('ResetPassword');
          }
        });
      } catch (error) {
        console.log('Error while resetting password', error);
      }
    }
  };

  const reset_password = async (username) => {
    console.log('Inside reset_password...!');
    try {
      const response = await axios.post(
        `${BASE_URL}/api/reset_password_request`,
        { username },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('Reset Password is Successful', response.data);
    } catch (error) {
      console.error('Error while resetting password', error.message);

      // Check if the error object exists and has a response property
      if (error.response) {
        console.error('Response status:', error.response.status);
        // Handle specific response status codes if needed
        if (error.response.status === 401) {
          console.log('Unauthorized: Password reset failed');
          // Handle unauthorized (401) error
        } else {
          console.error('Unexpected response:', error.response.data);
        }
      } else {
        // Handle network errors or other non-response related issues
        console.error('Network error or other issue:', error.message);
      }
    }
  };

  return (
    <>
    <View style={styles.backgroundGradientBanner}>         
        <GradientBanner text={PROJECT_NAME} />
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>   
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.pageContent}>
        <Text style={styles.title}>Login</Text>        
          <View style={styles.transparentBox}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="black"
              value={username}
              onChangeText={setUsername}
              style={styles.input} // Set the text color to black
            />
            {errorMessages.username && <Text style={styles.errorText}>{errorMessages.username}</Text>}
            <TextInput
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input} // Set the text color to black
            />
            {errorMessages.password && <Text style={styles.errorText}>{errorMessages.password}</Text>}
            <View style={styles.buttonRow}>
              <GradientButton
                onPress={handleLogin}
                title={'LOGIN'}
                colors={['#0000FF', '#50C878']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                buttonStyle={styles.buttonLogin}
              />
            </View>
            </ScrollView>
          </View>
        </View>
      </View>
      </ScrollView>
      <Footer/>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundGradientBanner: {
    backgroundColor: '#FFFFFF', // Half white color
  },  
  background: {
    flex: 1,
    resizeMode: 'cover', // Scale the image to cover the entire screen
    justifyContent: 'center', // Center vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  pageContent: {
    flex: 1, // Ensure content fills the remaining space
    marginTop: 0, // Set the margin top to 0
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 26,
    textShadowColor: "blue",
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    marginTop: 20
  },
  buttonRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 10,
  },
  input: {
    width: 240,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 16,
    height: 48,
    marginTop: 10,
    color:'black'
  }, 
  errorText: {
    color: '#8B0000',
    marginTop: 10,
    fontSize:16,
    fontWeight:'500'
  },
  buttonLogin: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: 240,
    marginBottom: 6,
    backgroundColor: '#227fe3',
    marginTop: 8
  },
  transparentBox: {
    width: 340,
    height: 'auto',    
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  }
});

export default LoginScreen;
