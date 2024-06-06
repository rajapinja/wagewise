
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const TaxSlabPicker = ({selectedValue, onValueChange}) => {

  const [taxSlabs, setTaxSlabs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchTaxSlabs = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/taxSlabs`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("taxSlabs :", response.data.taxSlabs);
            setTaxSlabs(response.data.taxSlabs);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching taxSlabs:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchTaxSlabs();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading taxSlabs...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select taxSlab" value="" style={styles.pickerText} />
        {taxSlabs && taxSlabs.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.taxSlab_id} // Manager also an Employee
            value={item.taxSlab_name} // Manager also an Employee
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

export default TaxSlabPicker;
