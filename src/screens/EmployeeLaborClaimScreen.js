import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Switch, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import backgroundImage from '../images/whitebg.jpg';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import ProjectPicker from '../components/ProjectPicker';
import ActivityPicker from '../components/ActivityPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';


const EmployeeLaborClaimScreen = () => {

  const [employeeId, setEmployeeId] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [regularHours, setRegularHours] = useState('');
  const [overtimeHours, setOvertimeHours] = useState('');
  const [chargeable, setChargeable] = useState(false);
  const [chargeDate, setChargeDate] = useState(new Date());
  const [jwtToken, setJwtToken] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || hireDate;
    setShowDatePicker(false);

    // Format date as YYYY-MM-DD
    //const formattedDate = currentDate.toISOString().split('T')[0];
    setChargeDate(currentDate);
 };

const handleTextInputPress = () => {
    setShowDatePicker(true);
};

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted!');
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
              <Text style={styles.title}>Labor Claim</Text>
              <TextInput
                style={styles.input}
                value={employeeId}
                onChangeText={setEmployeeId}
                placeholder="Employee ID"
                keyboardType="numeric"
              />
              <ProjectPicker
                selectedValue={selectedProject}
                onValueChange={(itemValue) => setSelectedProject(itemValue)}
              // jwtToken = {jwtToken}
              />
              <ActivityPicker
                selectedValue={selectedActivity}
                onValueChange={(itemValue) => setSelectedActivity(itemValue)}
              //  jwtToken = {jwtToken}
              />
              <TextInput
                style={styles.input}
                value={regularHours}
                onChangeText={setRegularHours}
                placeholder="Regular Hours"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={overtimeHours}
                onChangeText={setOvertimeHours}
                placeholder="Overtime Hours"
                keyboardType="numeric"
              />
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Chargeable:</Text>
                <Switch
                  value={chargeable}
                  onValueChange={setChargeable}
                />
              </View>
              <TouchableWithoutFeedback onPress={handleTextInputPress}>
                <View style={styles.input}>
                  <TextInput
                    value={chargeDate ? chargeDate.toISOString().split('T')[0] : ''}                   
                    editable={false} // Disable manual editing of the date
                    style={styles.inputText} // Apply custom styles for the text
                  />
                </View>
              </TouchableWithoutFeedback>
              {showDatePicker && (
                <DateTimePicker
                  value={chargeDate || new Date()} // Use hireDate or current date if undefine
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <View style={styles.buttonRow}>
                <GradientButton
                  onPress={handleSubmit}
                  title={'LABOR~CLAIM'}
                  colors={['#0000FF', '#50C878']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  buttonStyle={styles.buttonLC} />
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
  buttonLC: {
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

export default EmployeeLaborClaimScreen;
