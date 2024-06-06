import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../images/whitebg.jpg';

const ContactUsScreen = () => {
  return (
    <>
      <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={'WageWise'} />
      </View>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.pageContent}>
              <Text style={styles.title}>Contact Us</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Contact Information:</Text>
              <Text> Mobile : <Text style={{ color: 'blue' }}>9347160365.</Text></Text>
              <Text> Email : <Text style={{ color: 'blue' }}>raja.pinja@gmail.com <Text style={{ color: 'black' }}>|</Text> raja_pinja@yahoo.com   </Text></Text>
            </View>                 
          </View>
        </ScrollView>    
        <Footer /> 
      </ImageBackground>     
    </>
  );
};

const styles = StyleSheet.create({
  backgroundGradientBanner: {
    backgroundColor: '#FFFFFF', // Half white color
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Scale the image to cover the entire screen
    justifyContent: 'center', // Center vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    textShadowColor: "blue",
    fontWeight: 'bold',
    color: "blue",
    marginTop: 20
  },
  pageContent: {
    flex: 1, // Ensure content fills the remaining space
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionHeading: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default ContactUsScreen;
