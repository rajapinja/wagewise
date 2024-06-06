
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const CountryISDPicker = ({selectedValue, onValueChange}) => {

  const [countryISDs, setCountryISDs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchCountryISDs = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/countryISDs`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("countryISDs :", response.data.countryISDs);
            setCountryISDs(response.data.countryISDs);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching countries:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchCountryISDs();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading countryISDs...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Country ISD" value="" style={styles.pickerText} />
        {countryISDs && countryISDs.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.country_isd_code} // Manager also an Employee
            value={item.country_isd_code} // Manager also an Employee
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 120,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 14,
    height: 49,
    marginBottom: 6,
    marginTop: 4,
    marginRight:118
  },
  pickerText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  tooltipContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default CountryISDPicker;
