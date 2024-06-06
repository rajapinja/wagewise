import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HamburgerMenu = ({ userRoles }) => {
  // Define menu items based on user roles
  const menuItems = [
    { id: 1, label: 'Dashboard', roles: ['admin', 'user'] },
    { id: 2, label: 'Profile', roles: ['admin', 'user'] },
    { id: 3, label: 'Settings', roles: ['admin'] },
    { id: 4, label: 'Admin Panel', roles: ['admin'] },
  ];

  // State to store visible menu items
  const [visibleMenuItems, setVisibleMenuItems] = useState([]);

  // Function to filter menu items based on user roles
  const filterMenuItems = () => {
    const filteredItems = menuItems.filter(item =>
      item.roles.some(role => userRoles.includes(role))
    );
    setVisibleMenuItems(filteredItems);
  };

  // Fetch user roles from database on component mount
  useEffect(() => {
    // Assuming you fetch user roles from the database here
    const fetchedUserRoles = ['admin', 'user']; // Sample user roles
    // Filter menu items based on user roles
    filterMenuItems(fetchedUserRoles);
  }, []);

  return (
    <View>
      {visibleMenuItems.map(item => (
        <TouchableOpacity key={item.id}>
          <Text>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HamburgerMenu;
