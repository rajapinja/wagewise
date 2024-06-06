import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';

const EmployeeIdGenerator = () => {
  const [sequentialCounter, setSequentialCounter] = useState(1000); // Initialize with the starting sequential counter

  useEffect(() => {
    // Load the sequential counter from AsyncStorage when the component mounts
    loadSequentialCounter();
  }, []);

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
    const randomId = generateRandomId();
    const employeeId = `WW${sequentialId}`;
    return employeeId;
  };

  // make an API call if logic as at back-end

  // const [employeeId, setEmployeeId] = useState('');

  // const generateEmployeeId = () => {
  //   const sequentialId = generateSequentialId();
  //   const randomId = generateRandomId();
  //   const employeeId = `WW${sequentialId}`;
  //   setEmployeeId(employeeId);
  // };

  // // Generate sequential ID
  // const generateSequentialId = () => {
  //   // Implement logic to generate sequential ID (e.g., retrieve from API, increment counter, etc.)
  //   // For demonstration, let's assume a counter is incremented locally
  //   // You can replace this with actual logic to retrieve the sequential ID
  //   return Math.floor(Math.random() * 9000) + 1000; // Example: Generates a random 4-digit number
  // };

  // // Generate random ID
  // const generateRandomId = () => {
  //   return Math.floor(Math.random() * 9000) + 1000; // Example: Generates a random 4-digit number
  // };

   //OR
   
  // const [employeeId, setEmployeeId] = useState('');

  // const generateEmployeeId = () => {
  //   const sequentialId = generateSequentialId();
  //   const randomId = generateRandomId();
  //   const employeeId = `WW${sequentialId}`;
  //   setEmployeeId(employeeId);
  // };

  // // Generate sequential ID
  // const generateSequentialId = () => {
  //   // Implement logic to generate sequential ID (e.g., retrieve from API, increment counter, etc.)
  //   // For demonstration, let's assume a counter is incremented locally
  //   // You can replace this with actual logic to retrieve the sequential ID
  //   return Math.floor(Math.random() * 9000) + 1000; // Example: Generates a random 4-digit number
  // };

  // // Generate random ID
  // const generateRandomId = () => {
  //   return Math.floor(Math.random() * 9000) + 1000; // Example: Generates a random 4-digit number
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Employee ID:</Text>
      <Text style={styles.id}>{generateEmployeeId()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  id: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EmployeeIdGenerator;
