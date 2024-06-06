import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          LARAID SOFTWARE SOLUTIONS{' '}
          <Text style={styles.superscript}>Innovation Explored...</Text>{' '}          
        </Text>
      </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 2,
    backgroundColor: '#333333',
    //backgroundColor: '#5151D6', // # E6E6FA Light gray background color #5151D6 -BG, and FG -DEDEF1 i contrast ratio : 4.52:1
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 2,
   
  },
  logoText: {
   fontWeight: 'bold',
    fontSize: 12,
    color: '#8EF69A', // Dark gray color for company name
    textAlign:'center'
  }, 
  superscript: {
    fontStyle: 'italic',
    fontSize: 8,
    position: 'relative',
    top: -8,
    color: '#FFFFFF',
    //color: '#00F', // Blue color for superscript
    fontWeight:'bold'
  },
  subscript: {
    fontSize: 8,
    position: 'relative',
    bottom: -8,
    color: '#F90', // Orange color for subscript
  },
});

export default Footer;
