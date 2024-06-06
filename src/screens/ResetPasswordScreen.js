import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet, ImageBackground,ScrollView } from 'react-native';
import { BASE_URL, PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import backgroundImage from '../images/whitebg.jpg';

const ResetPasswordScreen = ({ navigation }) => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [statusCode, setStatusCode] = useState(null);
    const [username, setUsername] = useState('');

    // Always retrieve accessToken from AsyncStorage
    useEffect(() => {
        retrieveValues();
    }, []);

    // Function to retrieve values from AsyncStorage
    const retrieveValues = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if(user != null){
                setUsername(user.trim());
            }          
        } catch (error) {
            console.error('Error retrieving values:', error);
        }
    };

    useEffect(() => {
        // Clear error messages when the component is mounted or navigated back to
        const unsubscribe = navigation.addListener('focus', () => {
          setErrorMessages({});
        });
    
        return unsubscribe;
      }, [navigation]);
    

    // TODO: Add any other validation checks for password strength
    const validatePassword = (newPassword) => {
        // Define the pattern for allowed characters
        const allowedCharsPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        
         // Check if the password meets the minimum length requirement
         if (newPassword.length < 8) {
            return 'Password must be at least 8 characters long';
        }

        // Check if the password matches the allowed pattern
        if (!allowedCharsPattern.test(newPassword)) {
            return 'Password should only contain alphanumeric characters and special characters like !@#$%^&*()_-+=[]{};:\'"\\|,.<>/?';
        }
        
        // Check if the password contains at least one letter and one number
        if (!/[a-zA-Z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            return 'Password must contain at least one letter and one number';
        }
        
        // Additional checks (e.g., no repeating characters, no common patterns) can be added as needed
        
        // If the password passes all checks, return null to indicate no error
        return null;
    };

    const handleResetPassword = async () => {
        try {
            // Create an object containing registration data   
            const errors = {};

            if (!newPassword) {
                errors.newPassword = 'New Password is required';
            }

            if (!confirmPassword) {
                errors.confirmPassword = 'Confirm Password is required';
            }
            const passwordError = validatePassword(newPassword);
            if (passwordError) {
                errors.newPassword = passwordError;
            }
            if (newPassword !== confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
            if (Object.keys(errors).length > 0) {
                setErrorMessages(errors);
            } else {
                // Send the reset request to the server
                await axios.post(`${BASE_URL}/api/reset_password`,
                    { username, newPassword, confirmPassword },
                    { headers: { 'Content-Type': 'application/json' } }
                ).then(response => {
                    console.log(response)
                    console.log('User Reset Password Successful', response.data.message);
                    setNewPassword('');
                    setConfirmPassword('');
                    setStatusCode(response.status);
                    navigation.navigate('Login');
                    if (response.status === 1062) {
                        console.log("message 1:", response.data.message)
                        setStatusCode(response.status);
                        navigation.navigate('Home')
                    }
                }).catch(error => {
                    if (error.response.data.error) {
                        setErrorMessage(error.response.data.error); 
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
                    navigation.navigate('Home')
                })
            }
        } catch (error) {
            // Handle and display the error
            setError(error.response.data.error || 'An error occurred');
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
                    <Text style={styles.title}>Reset~Password</Text>
                    <View style={styles.transparentBox}>
                        <TextInput
                            placeholder="New Password"
                            placeholderTextColor="black"
                            secureTextEntry
                            value={newPassword}             
                            onChangeText={setNewPassword}
                            style={[styles.input, { color: 'black' }]} // Set the text color to black
                        />
                        {errorMessages.newPassword && <Text style={styles.errorText}>{errorMessages.newPassword}</Text>}
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry
                            value={confirmPassword}     
                            onChangeText={setConfirmPassword}
                            style={[styles.input, { color: 'black' }]}
                        />
                        {errorMessages.confirmPassword && <Text style={styles.errorText}>{errorMessages.confirmPassword}</Text>}
                        <View style={styles.buttonRow}>
                            <GradientButton
                                onPress={handleResetPassword}
                                title={'RESET~PASSWORD'}
                                colors={['#0000FF', '#50C878']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                buttonStyle={styles.buttonReset}
                            />
                        </View>
                    </View>
                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                    {errorMessage !== '' && <Text style={styles.errorText}>Error: {errorMessage} </Text>}
                </View>
            </View>
            </ScrollView>
            <Footer />
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
        justifyContent: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 20,
        color:'black'
    },  
    errorText: {
        color: '#8B0000',
        marginTop: 10,
        fontSize:16,
        fontWeight:'500'
      },  
    input: {
        width: 200,
        padding: 10,
        borderWidth: 1, // Apply border
        borderColor: 'black', // Border color
        borderRadius: 5, // Border radius
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 16,
        height: 48,
        marginTop: 16,
    },
    buttonContainer: {
        borderRadius: 15, // Border radius 
        width: '52%',
        padding: 10,
        fontSize: 50,
        marginBottom: 60,
    },   
    buttonRow: {
        flexDirection: 'row',
        paddingBottom: 5,
        justifyContent: 'space-between',
        margin: 5,
        marginTop: 10,
    },
    buttonReset: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        width: 200,
        marginBottom: 10,
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
        marginTop: 16,
        marginBottom: 10,
    }
});

export default ResetPasswordScreen;
