import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../images/whitebg.jpg';

const TermsConditionsScreen = () => {

return (
    <>
    <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={'WageWise'} />     
    </View>
    <View style={styles.backgroundBordertoScreen}>        
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>       
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.pageContent}>
                    <Text style={styles.title}>Terms and Conditions Screen</Text>    
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>1. Acceptance of Terms:</Text>
                    <Text>
                        Clearly state that users must accept your terms and conditions to use the app.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>2. User Conduct:</Text>
                    <Text>
                        Outline acceptable and unacceptable user behavior within the app.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>3. Intellectual Property:</Text>
                    <Text>
                        Specify ownership of intellectual property (e.g., app content, trademarks).
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>4. Limitations of Liability:</Text>
                    <Text>
                        Limit your liability in certain situations (e.g., service interruptions, data loss).
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>5. Termination:</Text>
                    <Text>
                        Describe conditions under which users may have their access terminated.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>6. Governing Law:</Text>
                    <Text>
                        Indicate the jurisdiction and laws that govern the agreement.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>7. Changes to Terms:</Text>
                    <Text>
                        State that terms and conditions may be amended, and provide a way to notify users of changes.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>8. Dispute Resolution:</Text>
                    <Text>                       
                        Specify the process for resolving disputes, such as through arbitration or mediation.
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
    backgroundBordertoScreen:{
        backgroundColor: '#222222', // Half white color
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
      marginTop:-30
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
        marginTop: 10,
        marginBottom: 10,
      },
      sectionHeading: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
});

export default TermsConditionsScreen;
