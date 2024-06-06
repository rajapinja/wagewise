import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useUserContext } from '../app/UserContext';
import backgroundImage from '../images/whitebg.jpg';
import RunningClock from '../components/RunningClock';
import LoggedInTime from '../components/LoggedInTime';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import { PROJECT_NAME } from '../app/Config';

const ProfileScreen = ({ navigation }) => {
  const { user, role } = useUserContext();

  return (
    <>
    <View style={styles.backgroundGradientBanner}>         
        <GradientBanner text={PROJECT_NAME} />
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.pageContent}>
          <Text style={styles.title}>User Profile Screen</Text>
          <View style={styles.transparentBox}>
            <View style={styles.innerView}>
              <Text style={styles.profileText}>Welcome, {user} ({role})  </Text>
            </View>
            <View style={styles.innerView}>
              <RunningClock style={styles.profileText} />
              <LoggedInTime />
            </View>          
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
                onPress={() => navigation.navigate('Logout')}
                title={'LOGOUT'}
                colors={['red', 'blue']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                buttonStyle={styles.buttonLogout}
              />
            </View>
        </View>
      </View>
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
    fontSize: 20,
    marginBottom: 10,
    textShadowColor: "blue",
    fontWeight: 'bold',
    color: "blue",
    marginTop: 120,
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
    fontSize: 30,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  profileText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  innerView: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingBottom: 10,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '47%',
    backgroundColor: '#227fe3',
    marginRight: 10
  },
  buttonText: {
    color: '#E0E0E0', // Example text color
    fontSize: 12,
    fontWeight: 'bold',
  },  
  buttonMenu: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: '62%',  
    backgroundColor: '#227fe3',
    marginTop: 10
  },
  buttonLogout: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: '62%',
    marginBottom: 190,
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
export default ProfileScreen;
