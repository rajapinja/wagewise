import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Picker } from 'react-native';

const MobileNumberComponent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleMobileNumberChange = (value) => {
    // Validate mobile number input if needed
    setMobileNumber(value);
  };

  const handleCountryCodeChange = (value) => {
    // Validate country code input if needed
    setCountryCode(value);
  };

  return (
    <View>
      <Text>Country Code</Text>
      <Picker
        selectedValue={countryCode}
        onValueChange={(itemValue) => handleCountryCodeChange(itemValue)}
        style={styles.picker}
      >
        {/* Populate with country codes */}
        <Picker.Item label="+1 (US)" value="+1" />
        <Picker.Item label="+91 (India)" value="+91" />
        {/* Add more country codes as needed */}
      </Picker>

      <Text>Mobile Number</Text>
      <TextInput
        value={mobileNumber}
        onChangeText={(text) => handleMobileNumberChange(text)}
        style={styles.input}
        keyboardType="phone-pad" // Set keyboard type to numeric
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default MobileNumberComponent;
