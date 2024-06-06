import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../app/Config';
import {Picker} from '@react-native-picker/picker';


const UserRoles = ({ selectedRole, setSelectedRole}) => {
   const [roles, setRoles] = useState([]); 

   // Always get latest round number from DB 
   useEffect(() => {    
    fetchRoles();    
  }, []);

  const fetchRoles = async () => {    
      await axios.get(`${BASE_URL}/api/roles`)
      .then(response => {
        console.log(response.data.userRoles);
        setRoles(response.data.userRoles);
      })
      .catch(error => {
        if (error.response) {
          // Handle response-related errors
          console.error('Response:', error.response);
        } else if (error.request) {
          // Handle request-related errors
          console.error('Request:', error.request);
        } else {
          // Handle other errors
          console.error('Other Error:', error.message);
        }
      });
  };

  if (!roles || roles.length === 0) {
    return <Text color="red">Loading roles...</Text>;
  }

  return (
    <View style={styles.input}>     
      <Picker
        selectedValue={selectedRole}
        onValueChange={(itemValue, itemIndex) => setSelectedRole(itemValue)}
      >
        <Picker.Item label="Select a role" value="" style={styles.pickerText}  />
            {roles.map((role, index) => (               
                <Picker.Item
                    style={styles.pickerText} 
                    key={index}  // Use a unique key, such as the index
                    label={role.role}  // Get the role name from the roleObject
                    value={role.role}  // Use the role name as the value
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
    marginTop:4
  },
  pickerText: {
    fontSize: 14,    
  },
  });
export default UserRoles;
