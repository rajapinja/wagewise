import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import UserRoles from '../components/Roles'
import { BASE_URL, PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import backgroundImage from '../images/whitebg.jpg';

function RegistrationScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [selectedRole, setSelectedRole] = useState('');
  const [statusCode, setStatusCode] = useState(null);

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
    if (!allowedCharsPattern.test(text)) {
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

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };


  const handleRegistration = async () => {

    // Create an object containing registration data   
    const errors = {};

    const userError = validateUsername(username)
    if (userError) {
      errors.username = userError;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      errors.password = passwordError;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
    } else {

      console.log("selectedRole:" + selectedRole);
      const registrationData = {
        username: username,
        userpassword: password,
        email: email,
        selectedRole: selectedRole,
      };

      await axios.post(`${BASE_URL}/api/registration`, JSON.stringify(registrationData), {
        headers: { 'Content-Type': 'application/json', }
      })
        .then(response => {
          console.log(response);
          console.log('User Registration Successful', response.data.message);
          setUsername('');
          setPassword('');
          setEmail('');
          setStatusCode(response.status);
          navigation.navigate('Login');
          if (response.status === 1062) {
            console.log("message 1:", response.data.message);
            setStatusCode(response.status);
            navigation.navigate('Home');
          }
          if (response.status === 409) {
            // Display duplicate user error message
            console.log('Duplicate user:', response.data.message);
            //   navigation.navigate('Home')
          }
        }).catch(error => {
          if (error.response.data.error) {
            setErrorMessage(error.response.data.error);
            console.log("Response 0:", error.response.data.error);

            console.error('Response Status:', error.response.status);
          } else if (error.response) {
            // Handle response-related errors
            console.error('Response error.response):', error.response);
            console.error('Response error:', error.response.data.error);
            setErrorMessage(error.response.data.error);
          } else if (error.request) {
            // Handle request-related errors
            console.error('Request:', error.request);
          } else {
            // Handle other errors
            console.error('Other Error:', error.message);
          }
          navigation.navigate('Home');
        });
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
            <Text style={styles.title}>Registration</Text>
            <View style={styles.transparentBox}>    
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TextInput
                  placeholder="User name"
                  placeholderTextColor="black"
                  onChangeText={setUsername}
                  style={[styles.inputUser, { color: '#333333' }]} // Set the text color to black
                />
                {errorMessages.username && <Text style={styles.errorText}>{errorMessages.username}</Text>}
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry
                  onChangeText={setPassword}
                  style={[styles.input, { color: '#333333' }]} // Set the text color to black
                />
                {errorMessages.password && <Text style={styles.errorText}>{errorMessages.password}</Text>}
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="black"
                  secureTextEntry
                  onChangeText={setConfirmPassword}
                  style={[styles.input]} />
                {errorMessages.confirmPassword && <Text style={styles.errorText}>{errorMessages.confirmPassword}</Text>}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="black"
                  onChangeText={setEmail}
                  style={[styles.input, { color: '#333333' }]} // Set the text color to black
                />
                {errorMessages.email && <Text style={styles.errorText}>{errorMessages.email}</Text>}
                <UserRoles
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />          
                <View style={styles.buttonRow}>
                  <GradientButton
                    onPress={handleRegistration}
                    title={'REGISTER'}
                    colors={['#0000FF', '#50C878']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    buttonStyle={styles.buttonReg} />
                </View>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                {errorMessage !== '' && <Text style={styles.errorText}>Error: {errorMessage} </Text>}
            </ScrollView>
          </View>
          </View>
        </View>  
        </ScrollView>  
        <Footer />   
      </ImageBackground>     
    </>
  );
}

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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  pageContent: {
    flex: 1, // Ensure content fills the remaining space
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center'    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    color: 'black'  
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
    height: 48,
    color: '#333333'
  },
  inputUser: {
    width: 200,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
    height: 49,
    color: '#333333'
  },
  buttonContainer: {
    borderRadius: 15, // Border radius 
    width: '52%',
    padding: 10,
    fontSize: 50,
    marginBottom: 20,
  },
  errorText: {
    color: '#8B0000',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
  },
  buttonRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 10,
  },
  buttonReg: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: 200,
    marginBottom: 16,
    backgroundColor: '#007AFF'
  },
  transparentBox: {
    width: 340,
    height: 'auto',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
  }
});

export default RegistrationScreen;
