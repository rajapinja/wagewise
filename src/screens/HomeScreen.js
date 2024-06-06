import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {PROJECT_NAME} from '../app/Config';
import GradientBanner from '../components/Header';
import backgroundImage from '../images/whitebg.jpg';
import Footer from '../components/Footer';


const HomeScreen = ({ navigation }) => {  

  const route = useRoute();
 
  const handleContactUsPress = () => {
    navigation.navigate('ContactUs');
  };

  const handlePrivacyPolicyPress = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleTermsConditionsPress = () => {
    navigation.navigate('TermsConditions');
  };

  return (
    <>
    <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={PROJECT_NAME} />     
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>    
      <ScrollView>
      <View style={styles.overlay}/>   
        <View style={styles.container}>
       
          <Text style={styles.title}>Home Screen Overview</Text>
            <Text style={styles.content}>
              The "Home" screen acts as a central hub, providing HRs and Employees with an overview of the app's functionalities, recent activities, and direct access to essential sections, ultimately enhancing user engagement and facilitating smooth navigation within the WageWise application.
            </Text>
          <View style={styles.section}>
            <Text style={{...styles.subtitle, color:'purple'}}>Dashboard Overview:</Text>
            <Text style={styles.content}>
              Upon launching the app, users are greeted with a comprehensive dashboard-style layout. The dashboard displays essential information and quick links to navigate through the app's core features and functionalities.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={{...styles.subtitle, color:'purple'}}>Navigation & Hamburger Menus:</Text>
            <Text style={styles.content}>
              The Home screen contains a user-friendly navigation system, offering clear pathways to different sections of the application. {'\n'}
              <Text style={styles.bulletPoints}>
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Create Employee:</Text> Start a new game session.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Human Resource Management:</Text> Add, edit, or view players participating in a game.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Employee Labor Claiming :</Text> Record and manage scores during gameplay.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Tax Declaration, Regulations, and Tax Slabs:</Text>Modify or clear game-related data.               
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Project and Activity Creation:</Text>Access to helpful resources such as SwaggerDocs or app documentation.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Documentation:</Text>Access to helpful resources such as SwaggerDocs or app documentation.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>User Profile:</Text>Access personal settings, preferences, and account information.
                {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Login/Logout:</Text> Secure access to the app with authentication options.
              </Text>
            </Text>
          </View> 
          <View style={styles.section}>
            <Text style={{...styles.subtitle, color:'purple'}}>Personalization & User Interaction:</Text>
            <Text style={styles.content}>
            The Screens that Requires Floating Keyboard             
              <Text style={styles.bulletPoints}>
                  {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>HR Screen:</Text> To Manage Human Resource Management 
                  {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Employee Creation Screen:</Text>To Create and Terminate Employees       
                  {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'blue'}}>Employee Tax Declaration, Regulations, and Tax Slabs Screen:</Text>To Create and Terminate Employees                           
                </Text>
              {'\n'}
              {'\n'}<Text style={{...styles.content, fontWeight:'bold', color:'green'}}>How to navigate to Floating Keyboard </Text>
              {'\n'}
              {'\n'}<Text style={styles.step}>1. Open a Text Input Field</Text>
              {'\n'}<Text style={styles.step}>2. Find the Keyboard Icon</Text>
              {'\n'}<Text style={styles.step}>3. Long Press the Keyboard Icon</Text>
              {'\n'}<Text style={styles.step}>4. Select the Floating Keyboard Option</Text>
              {'\n'}<Text style={styles.step}>5. Resize and Position the Floating Keyboard</Text>
              {'\n'}<Text style={styles.step}>6. Close the Floating Keyboard</Text>            
            </Text>
          </View>       
          <View style={styles.section}>
            <Text style={{...styles.subtitle, color:'purple'}}>Highlighted Features : </Text>
            <Text style={styles.content}>
              Highlight key features or recent activities within the app. For instance, showcase recently added players, updated scores, or significant changes made to games. 
            </Text>
          </View> 
        </View>
        <View style={styles.section}>          
        </View> 
         {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleContactUsPress}>
            <Text style={styles.footerLink} >Contact Us</Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.footer}>        
          <TouchableOpacity  onPress={handlePrivacyPolicyPress}>
            <Text style={styles.footerLink}  >Privacy Policy</Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.footer}>
          <TouchableOpacity  onPress={handleTermsConditionsPress}>
            <Text style={styles.footerLink}  >Terms & Conditions</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
  }, 
  title: {
    fontSize: 22,
    textShadowColor: "blue",
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:16,
  },
  section: {
    marginTop: 6 
  },
  topRight: {
    position: 'absolute',
    top: 2,
    right: 0,
    zIndex: 999,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: 'black', // Set your desired text color here
  },
  buttonTheme: {
    height: 20,
    backgroundColor: 'gray',
    width: 50,
    borderRadius: 13,
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'darkgray', // Example text color
    fontSize: 12,
    fontWeight: 'bold',
  },
   heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: -40
  },
  boldText: {
    fontWeight: '700'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 16,
    marginLeft: 16,
    alignItems: 'center'
  },
  footerLink: {
    fontSize: 36,
    color: 'blue',
    textDecorationLine: 'underline',  
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  content: {
    fontSize: 15,
    marginBottom: 10,
    color:'black'
  },
  bulletPoints: {
    marginLeft: 20,
    marginBottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)' // Adjust the alpha value (0.5) to control the opacity of the overlay
  },
  step: {
    fontSize: 16,
    marginBottom: 10,
  },
});


export default HomeScreen;
