import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const ValidationComponent = ({ value, onChangeText, validationType, placeholder }) => {

    const [errorMessage, setErrorMessage] = useState('');

    const validateField = (value) => {
        switch (validationType) {
            case 'name':
                if (!value || value.trim() === '') {
                    setErrorMessage('Name is required');
                    return false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value || !emailRegex.test(value)) {
                    setErrorMessage('Invalid email address');
                    return false;
                }
                break;
            case 'mobile':
                const mobileRegex = /^[0-9]{10}$/;
                if (!value || !mobileRegex.test(value)) {
                    setErrorMessage('Mobile number must be exactly 10 digits');
                    return false;
                }
                break;
            case 'numeric':
                const numericRegex = /^[0-9]*$/;
                if (!value || !numericRegex.test(value)) {
                    setErrorMessage('Must be a numeric value');
                    return false;
                }
                break;
            case 'decimal':
                const decimalRegex = /^\d*\.?\d*$/;
                if (!value || !decimalRegex.test(value)) {
                    setErrorMessage('Must be a decimal value');
                    return false;
                }
                break;
            case 'date':
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                if (!value || !dateRegex.test(value)) {
                    setErrorMessage('Invalid date format, MySQL Date foratmat (YYYY-MM-DD)');
                    return false;
                }
                break;
            // Add more validation types as needed
            default:
                break;
        }
        setErrorMessage('');
        return true;
    };

    const handleOnChangeText = (value) => {
        onChangeText(value);
        if (validationType) {
            validateField(value);
        }
    };

    const keyboardType = validationType === 'mobile' || validationType === 'numeric' || validationType === 'decimal' ? 'numeric' : 'default';

    return (
        <View>
            {/* <Text>{label}</Text> */}
            <TextInput
                value={value}
                onChangeText={handleOnChangeText}
                style={styles.input}
                keyboardType={keyboardType}
                placeholder={placeholder}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
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
    error: {
        color: 'red',
    },
});

export default ValidationComponent;


{/* <ValidationComponent
  label="Name"
  value={name}
  onChangeText={setName}
  validationType="name"
/>

<ValidationComponent
  label="Email"
  value={email}
  onChangeText={setEmail}
  validationType="email"
/>

<ValidationComponent
  label="Mobile Number"
  value={mobile}
  onChangeText={setMobile}
  validationType="mobile"
/>

<ValidationComponent
  label="Age"
  value={age}
  onChangeText={setAge}
  validationType="numeric"
/> */}
