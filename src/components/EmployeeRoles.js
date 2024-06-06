
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const EmployeeRolePicker = ({selectedValue, onValueChange}) => {

  const [employeRoles, setEmployeRoles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchEmployeeRoles = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/employeRoles`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("employeRoles :", response.data.employeRoles);
            setEmployeRoles(response.data.employeRoles);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching employeRoles:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchEmployeeRoles();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading employeRoles...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Role" value="" style={styles.pickerText} />
        {employeRoles && employeRoles.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.role_id} // Manager also an Employee
            value={item.role_name} // Manager also an Employee
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

export default EmployeeRolePicker;
