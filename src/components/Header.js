import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from Expo
import HamburgerMenu from './HamburgerMenu'; // Import your HamburgerMenu component
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GradientBanner = ({ text }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [jwtToken, setJwtToken] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  //const { user, role } = useContext(useUserContext); // Retrieve user and role from context
  // Always retrieve accessToken from AsyncStorage
  useEffect(() => {
    retrieveValues();
  }, []);

  // Function to retrieve values from AsyncStorage  
  const retrieveValues = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken != null) {
        setJwtToken(accessToken.trim());       
     }       
    } catch (error) {
      console.error('Error retrieving values:', error);
    }
  };

  // Assuming you have imported TouchableOpacity, Text, styles, navigation, and route
  const isAllowedRoute = ['Menu'].includes(route.name) && jwtToken;

  const handleHamburgerPress = () => {
    setShowMenu(!showMenu);
    // Alert.alert("Wow...! HamburgerMenu is working..!!")     
  };

  return (
    <View style={styles.header}>
      <LinearGradient
        //colors={['rgba(255, 126, 95, 1)', 'rgba(254, 180, 123, 1)', 'rgba(79, 172, 254, 1)']}  
        colors={['rgba(255, 126, 95, 1)', 'rgba(15, 25, 125, 1)', 'rgba(79, 172, 254, 1)']}  
        //colors={['rgba(255, 126, 95, 0.9)', 'rgba(254, 180, 123, 0.9)', 'rgba(255, 0, 0, 0.9)']}        
        start={{ x:0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBackground}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../images/Logo_laraid.jpeg')}
            style={styles.logo}
            resizeMode="contain" // Adjust the resizeMode based on your logo's aspect ratio
          />
        </View>
        <Text style={styles.banner}>{text}</Text>
      </LinearGradient>

      <HamburgerContainer>
        <HamburgerMenu
          showMenu={showMenu}
          onPress={handleHamburgerPress}
          isAllowedRoute={isAllowedRoute}
          route={route}
          navigation={navigation}
          jwtToken={jwtToken}
          //colors={['#50C878', '#0000FF']}
          colors={['#FF512F', '#0000FF']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }} />
      </HamburgerContainer>
    </View>
  );
};

const HamburgerContainer = ({ children }) => (
  <View style={styles.hamburgerContainer}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  gradientBackground: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row', // Align logo and text horizontally
    alignItems: 'center', // Center items vertically
    height: 60, // Set the height of the gradientBackground
  },
  banner: {
    fontSize: 25,
    fontWeight: 'bold',
    //color: '#32383D',
    //color: '#0eac77',
    //color: '#800080',
    //color: '#000080',    
    color: '#8EF69A',
    //color: 'darkblue', 
    marginLeft: 10, // Add spacing between logo and text
    //textShadowColor: 'blue',
    textAlign: 'center', // Center the text horizontally
    flex: 1, // Allow text to take remaining space
    marginRight: 50,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.4)', // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 5, // Shadow radius
  },
  logoContainer: {
    //   height: '100%', // Match the height of the gradientBackground
    width: 60, // Set a fixed width for the logo
    alignItems: 'flex-start', // Align logo to the left
    justifyContent: 'flex-start', // Align logo to the top
  },
  logo: {
    height: 59.8, // Make the logo fill its container's height
    aspectRatio: 1, // Maintain the aspect ratio of the logo
  },
  // hamburgerContainer: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  // },
  hamburger: {
    zIndex: 1,
  },
  hamburgerContainer: {
    position: 'absolute',
    top: -4,
    right: 6,    
    width: 80, // Adjust width to match icon size
    height: 80, // Adjust height to match icon size
    justifyContent: 'center',
    alignItems: 'center'    
  },
});


export default GradientBanner;
