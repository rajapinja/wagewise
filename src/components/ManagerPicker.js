
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const ManagerPicker = ({selectedValue, onValueChange}) => {

  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchManagers = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/managers`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("managers :", response.data.managers);
            setManagers(response.data.managers);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching managers:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchManagers();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading managers...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Manager" value="" style={styles.pickerText} />
        {managers && managers.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.employee_id} // Manager also an Employee
            value={item.employee_name} // Manager also an Employee
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

export default ManagerPicker;
