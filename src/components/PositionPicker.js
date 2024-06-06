
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const PositionPicker = ({selectedValue, onValueChange}) => {

  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchPositions = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/positions`, {'Content-Type': 'application/json' })
          .then(response => {
            console.log("positions :", response.data.positions);
            setPositions(response.data.positions);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching positions:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchPositions();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading positions...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Position" value="" style={styles.pickerText} />
        {positions && positions.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            label={item.position_title} // Manager also an Employee
            value={item.position_id} // Manager also an Employee
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 240,
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

export default PositionPicker;
