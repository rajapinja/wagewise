import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { BASE_URL, PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import backgroundImage from '../images/whitebg.jpg';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DepartmentPicker from '../components/DepartmentPicker';
import CountryPicker from '../components/CountryPicker';
import PositionPicker from '../components/PositionPicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ValidationComponent from '../components/ValidationComponent';
import CountryISDPicker from '../components/CountryISDPicker';

const EmployeeScreen = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [manager, setManager] = useState(false);
    const [selectedDeptId, setSelectedDeptId] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [salary, setSalary] = useState(0.0);
    const [hireDate, setHireDate] = useState(new Date());
    const [jwtToken, setJwtToken] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [sequentialCounter, setSequentialCounter] = useState(1000); // Initialize with the starting sequential counter
    const [selectedISD, setSelectedISD] = useState('');

    useEffect(() => {
        retrieveValues();
    }, []);

    const retrieveValues = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            setJwtToken(accessToken.trim());
        } catch (error) {
            console.error('Error retrieving values:', error);
        }
    };

    const headers = {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
    };

    // Generate Employee Id
    useEffect(() => {
        // Load the sequential counter from AsyncStorage when the component mounts
        loadSequentialCounter();
      }, []);
      
      useEffect(() => {
        // Generate the Employee ID when the sequential counter changes
        const generatedEmployeeId = generateEmployeeId();
        setEmployeeId(generatedEmployeeId);
      }, []); // Run this effect whenever the sequentialCounter state changes
      

    const loadSequentialCounter = async () => {
        try {
            const value = await AsyncStorage.getItem('sequentialCounter');
            if (value !== null) {
                setSequentialCounter(parseInt(value, 10));
            }
        } catch (error) {
            console.error('Error loading sequential counter:', error);
        }
    };

    const saveSequentialCounter = async (counter) => {
        try {
            await AsyncStorage.setItem('sequentialCounter', counter.toString());
        } catch (error) {
            console.error('Error saving sequential counter:', error);
        }
    };

    const generateSequentialId = () => {
        const sequentialId = sequentialCounter;
        setSequentialCounter(prevCounter => prevCounter + 1); // Increment counter for the next ID
        saveSequentialCounter(sequentialCounter + 1); // Save the updated counter to AsyncStorage
        return sequentialId;
    };

    const generateRandomId = () => {
        return Math.floor(Math.random() * 9000) + 1000; // Example: Generates a random 4-digit number
    };

    const generateEmployeeId = () => {
        const sequentialId = generateSequentialId();
        //const randomId = generateRandomId();
        const employeeId = `WW${sequentialId}`;
        return employeeId;
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || hireDate;
        setShowDatePicker(false);

        // Format date as YYYY-MM-DD
        //const formattedDate = currentDate.toISOString().split('T')[0];
        setHireDate(currentDate);
    };

    const handleTextInputPress = () => {
        setShowDatePicker(true);
    };

    const postData = {
        employee_id : employeeId,
        first_name : firstName,
        last_name : lastName,
        email : email,
        phone_number : phone,
        hire_date : hireDate,
        department_id : selectedDeptId,
        position : selectedPosition,
        salary :salary,
        country_code : selectedCountry,
        manager : manager

    }

    const handleEmployee = async () => {

        await axios.post(`${BASE_URL}/api/create-employee`, 
        { },
        {headers : headers}
        )
        // Handle form submission here
        console.log('Employee Data!');
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
                            <Text style={styles.title}>Employee Screen</Text>
                            <TextInput
                                style={styles.input}
                                value={employeeId}
                                placeholder="Employee ID"
                                keyboardType="text"
                                editable={false} // Disable manual editing of the Employee ID
                            />
                            {/* <TextInput
                                style={styles.input}
                                value={firstName}
                                onChangeText={setFirstName}
                                placeholder="First Name"
                                keyboardType="text"
                            />
                            <TextInput
                                style={styles.input}
                                value={lastName}
                                onChangeText={setLastName}
                                placeholder="Last Name"
                                keyboardType="text"
                            />
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Email"
                                keyboardType="text"
                            />
                            <TextInput
                                style={styles.input}
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Phone"
                                keyboardType="numeric"
                            /> */}

                            <ValidationComponent                                
                                value={firstName}
                                onChangeText={setFirstName}
                                validationType="name"                              
                                placeholder="First Name"
                                keyboardType="text"                            
                            />

                            <ValidationComponent                              
                               value={lastName}
                               onChangeText={setLastName}
                               validationType="name"     
                               placeholder="Last Name"
                               keyboardType="text"                           
                            />
                            
                            <ValidationComponent                              
                                value={email}
                                onChangeText={setEmail}
                                validationType="email"     
                                placeholder="Email"
                                keyboardType="text"
                            />

                            <CountryISDPicker
                                selectedValue={selectedISD}
                                onValueChange={(itemValue) => setSelectedISD(itemValue)}
                            />
                            <ValidationComponent                               
                                value={phone}
                                onChangeText={setPhone}
                                validationType="mobile"   
                                placeholder="Phone"
                                keyboardType="numeric"
                            /> 

                            <TouchableWithoutFeedback onPress={handleTextInputPress}>
                                <View style={styles.input}>
                                    <TextInput
                                        value={hireDate ? hireDate.toISOString().split('T')[0] : ''}
                                        placeholder="Hire Date"
                                        editable={false} // Disable manual editing of the date
                                        style={styles.inputText} // Apply custom styles for the text
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={hireDate || new Date()} // Use hireDate or current date if undefine
                                    mode="date"
                                    display="default"
                                    onChange={handleDateChange}
                                />
                            )}
                            {/* <TextInput
                                style={styles.input}
                                value={salary}
                                onChangeText={setSalary}
                                placeholder="Salary"
                                keyboardType="numeric"
                            /> */}
                             <ValidationComponent
                                value={salary}
                                onChangeText={setSalary}
                                validationType="decimal" 
                                placeholder="Salary"
                                keyboardType="numeric"
                            />
                            <PositionPicker
                                selectedValue={selectedPosition}
                                onValueChange={(itemValue) => setSelectedPosition(itemValue)}
                            />
                            <DepartmentPicker
                                selectedValue={selectedDeptId}
                                onValueChange={(itemValue) => setSelectedDeptId(itemValue)}
                            // jwtToken = {jwtToken}
                            />
                            <CountryPicker
                                selectedValue={selectedCountry}
                                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                            //  jwtToken = {jwtToken}
                            />
                            <View style={styles.switchContainer}>
                                <Text style={styles.switchLabel}>Manager:</Text>
                                <Switch
                                    value={manager}
                                    onValueChange={setManager}
                                />
                            </View>
                            <View style={styles.buttonRow}>
                                <GradientButton
                                    onPress={handleEmployee}
                                    title={'EMPLOYEE'}
                                    colors={['#0000FF', '#50C878']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    buttonStyle={styles.buttonEmp} />
                            </View>
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
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        color: 'black'
    },
    input: {
        width: 240,
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
    buttonRow: {
        flexDirection: 'row',
        paddingBottom: 5,
        justifyContent: 'space-between',
        margin: 5,
        marginTop: 10,
    },
    buttonEmp: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        width: 240,
        marginBottom: 16,
        backgroundColor: '#007AFF'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchLabel: {
        marginRight: 10,
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
    },
    inputText: {
        textAlign: 'center', // Center text horizontally
    },
});

export default EmployeeScreen;
