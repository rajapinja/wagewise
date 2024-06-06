
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const PermissionPicker = ({selectedValue, onValueChange}) => {

  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchPermissions = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/permissions`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("permissions :", response.data.permissions);
            setPermissions(response.data.permissions);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching permissions:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchPermissions();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading permissions...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Permission" value="" style={styles.pickerText} />
        {permissions && permissions.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.permission_id} // Manager also an Employee
            value={item.permission_name} // Manager also an Employee
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

export default PermissionPicker;
