import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../images/whitebg.jpg';


const PrivacyPolicyScreen = () => {
return(
    <>
    <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={'WageWise'} />     
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>        
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.pageContent}>
                    <Text style={styles.title}>Privacy Policy</Text>                     
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>1. Information Collection:</Text>
                    <Text>
                        Describe the types of information your app collects from users (e.g., user-generated content, device information).
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>2. Use of Information:</Text>
                    <Text>
                        Explain how you use the collected information (e.g., to improve app functionality, personalize user experience).
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>3. Sharing of Information:</Text>
                    <Text>
                        Detail whether and how you share user information with third parties.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>4. Security:</Text>
                    <Text>
                        Discuss the security measures you have in place to protect user information.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>5. Third-Party Services:</Text>
                    <Text>
                        If your app integrates with third-party services (e.g., analytics tools), disclose this information.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>6. Cookies and Tracking:</Text>
                    <Text>
                        If applicable, explain the use of cookies or tracking technologies.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>7. User Rights:</Text>
                    <Text>
                        Outline users' rights regarding their personal information, such as the right to access, correct, or delete their data.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>8. Changes to the Privacy Policy:</Text>
                    <Text>
                        Specify that the privacy policy may be updated, and provide a way for users to be notified of changes.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>9. Contact Information:</Text>
                    <Text> Mobile : <Text style={{color : 'blue'}}>9347160365.</Text></Text>
                    <Text> Email : <Text style={{color : 'blue'}}>raja.pinja@gmail.com  <Text style={{color : 'black'}}>|</Text> raja_pinja@yahoo.com </Text></Text>    
                </View>
            </View>
            </ScrollView>
        <Footer/>
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
      color: "black",
      marginTop:-80
     },
     pageContent: {
        flex: 1, // Ensure content fills the remaining space
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      section: {
        marginBottom: 20,
      },
      sectionHeading: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
});

export default PrivacyPolicyScreen;
