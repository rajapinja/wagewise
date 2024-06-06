
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const EmployeePicker = ({selectedValue, onValueChange}) => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchEmployees = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/employees`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("employees :", response.data.employees);
            setEmployees(response.data.employees);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching employees:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchEmployees();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading employees...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Employee" value="" style={styles.pickerText} />
        {employees && employees.map((item, index) => (
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

export default EmployeePicker;
