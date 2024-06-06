import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { BASE_URL, PROJECT_NAME } from '../app/Config';
import { useUserContext } from '../app/UserContext';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../images/whitebg.jpg';
import GradientButton from '../components/GradientButton';

const LogoutScreen = ({ navigation }) => {

  const { user, role } = useUserContext();

  const handleLogout = async () => {
    // Perform logout actions here, such as clearing tokens or session data
    // After logout, navigate back to the login screen or any other desired screen
    console.log("User :", user, "Role :", role);
    try {
      const response = await axios.get(`${BASE_URL}/api/logout`);
      if (response.status === 200) {
        console.log('Loggedout User Successfully', response.data.message);
        navigation.navigate('Login'); // Replace 'Login' with the appropriate screen name
      }
    } catch (error) {
      if (error.response) {
        console.error('Logout Failed', error.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  };
  return (
    <>
    <View style={styles.backgroundGradientBanner}>         
        <GradientBanner text={PROJECT_NAME} />
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.pageContent}>
          <Text style={styles.title}>Logout</Text>         
          <View style={styles.transparentBox}>
            <Text style={styles.profileTitle}>User Profile</Text>
              <View style={styles.innerView}>
                <Text style={styles.profileText}>Welcome, {user} ({role})  </Text>
              </View>
              <View style={styles.buttonRow}>
                <GradientButton
                  onPress={() => navigation.navigate('Menu')}
                  title={'MENU'}
                  colors={['#0000FF', '#50C878']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  buttonStyle={styles.buttonMenu}
                />
              </View>
              <View style={styles.buttonRow}>
                <GradientButton
                  onPress={handleLogout}
                  title={'LOGOUT'}
                  colors={['red', 'blue']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  buttonStyle={styles.buttonLogout}
                />
              </View>
            </View>
        </View>
      </View>
      <Footer />
    </ImageBackground>
    </>
  );
}

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
    marginTop:-80
   },
  profileTitle: {
    fontSize: 16,
    marginBottom: 10,
    textShadowColor: "blue",
    fontWeight: 'bold',
    color: '#44067b',
    marginTop: 10,
  },
  pageContent: {
    flex: 1, // Ensure content fills the remaining space
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  buttonContainer: {
    borderRadius: 15, // Border radius 
    width: '52%',
    padding: 10,
    fontSize: 50,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  profileText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  innerView: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    marginTop: 0,
  },
  buttonMenu: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: '62%',
    marginBottom: 16,
    backgroundColor: '#227fe3',
    marginTop: 10
  },
  buttonLogout: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: '62%',
    marginBottom: 19,
    backgroundColor: '#227fe3',
    marginTop: 10
  },
  transparentBox: {
    width: 340,
    height: 'auto',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  }

});
export default LogoutScreen;
