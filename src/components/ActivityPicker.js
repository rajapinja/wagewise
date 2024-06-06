
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const ActivityPicker = ({selectedValue, onValueChange}) => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    const fetchActivities = async () => {
      try {
  
         await axios.get(`${BASE_URL}/api/activities`, { 'Content-Type': 'application/json'})
          .then(response => {
            console.log("activities :", response.data.activities);
            setActivities(response.data.activities);
          }).catch(error => {            
              console.error('Error:', error.message);        
          })
      } catch (error) {
        console.error('Error fetching activities:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchActivities();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading projects...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Activity" value="" style={styles.pickerText} />
        {activities && activities.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            value={item.activity_id}
            label={item.activity_name}
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

export default ActivityPicker;
