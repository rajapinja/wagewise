
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const TaxRegulationPicker = ({selectedValue, onValueChange}) => {

  const [taxRegulations, setTaxRegulations] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchTaxRegulations = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/taxRegulations`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("taxRegulations :", response.data.taxRegulations);
            setTaxRegulations(response.data.taxRegulations);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching taxRegulations:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchTaxRegulations();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading taxRegulations...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select TaxRegulation" value="" style={styles.pickerText} />
        {taxRegulations && taxRegulations.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.tax_regulation_id} // Manager also an Employee
            value={item.tax_bracket} // Manager also an Employee
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 14,
    height: 49,
    marginBottom: 6,
    marginTop: 6
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

export default TaxRegulationPicker;
