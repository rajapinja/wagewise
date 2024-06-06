import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { LinearGradient } from 'expo-linear-gradient';

const HamburgerMenu = ({ showMenu, onPress, route, navigation, jwtToken, isAllowedRoute }) => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.hamburger}>
        <Ionicons name="menu" size={65} color="#222"/>
      </TouchableOpacity>
      <Modal visible={showMenu} transparent={true} animationType="slide" onRequestClose={onPress}>       
        <LinearGradient
            colors={['rgba(79, 172, 254, 1)', 'rgba(254, 180, 123, 1)','rgba(255, 126, 95, 1)']}
            //colors={['rgba(39, 112, 194, 1)', 'rgba(204, 130, 83, 1)','rgba(204, 100, 64, 1)']}
        // Change these colors as per your gradient
            style={styles.modalContainer}
          >
           <ScrollView>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.closeButton}>CLOSE</Text>
            </TouchableOpacity>
            <View style={styles.menuItems}>
              {route.name === 'Home' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RazorPay')}><Text style={styles.menuText}>RazorPay</Text></TouchableOpacity>
                </>
              )}
               {route.name === 'Employee' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EmployeeLaborClaim')}><Text style={styles.menuText}>Employee Labor Claiming</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Project')}><Text style={styles.menuText}>Project</Text></TouchableOpacity>
                </>
              )}
               {route.name === 'Project' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EmployeeLaborClaim')}><Text style={styles.menuText}>Employee Labor Claiming</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {route.name === 'EmployeeLaborClaim' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Employee')}><Text style={styles.menuText}>Employee</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EmployeeLaborClaim')}><Text style={styles.menuText}>Employee Labor Claiming</Text></TouchableOpacity>
                </>
              )}
              {route.name === 'Registration' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                 
                </>
               )}
              {route.name === 'ContactUs' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}
              {route.name === 'PrivacyPolicy' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}
              {route.name === 'TermsConditions' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}
               {route.name === 'ExpoUtility' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>AddPlayer</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'Login' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'ResetPassword' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                   <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {route.name === 'CreateGame' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>AddPlayer</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'CreateGameType' && (
                <>  
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>               
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>AddPlayer</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'AddPlayer' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Type Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'RecordScores' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'EditScores' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'DisplayGames' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'DynamicDispaly' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'Swagger' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>                 
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'Profile' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>                 
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'DeleteDuplicate' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Validator')}><Text style={styles.menuText}>Validator</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {route.name === 'Reentry' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Validator')}><Text style={styles.menuText}>Validator</Text></TouchableOpacity> 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
               {route.name === 'ClearScores' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Validator')}><Text style={styles.menuText}>Validator</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
               {route.name === 'Validator' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>Add Player</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {isAllowedRoute && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>AddPlayer</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Validator')}><Text style={styles.menuText}>Validator</Text></TouchableOpacity>
                  {/* <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity> */}
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {/* {route.name === 'Menu' && {jwtToken} && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Rigistration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGame')}><Text style={styles.menuText}>Create Game</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CreateGameType')}><Text style={styles.menuText}>Create Game Type </Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DisplayGames')}><Text style={styles.menuText}>DisplayGames</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddPlayer')}><Text style={styles.menuText}>AddPlayer</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RecordScores')}><Text style={styles.menuText}>RecordScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DynamicDispaly')}><Text style={styles.menuText}>Display Scores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditScores')}><Text style={styles.menuText}>EditScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Reentry')}><Text style={styles.menuText}>Reentry</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ClearScores')}><Text style={styles.menuText}>ClearScores</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DeleteDuplicate')}><Text style={styles.menuText}>DeleteDuplicate</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Validator')}><Text style={styles.menuText}>Validator</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} */}
              {route.name === 'Logout' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Registration')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}> Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity>
                </>
              )} 
            </View>
          </View>
          </ScrollView>
        </LinearGradient>       
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  hamburger: {
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20, // Adjust padding as needed
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'black',
    fontSize: 21,
    fontWeight:'bold'
  },
  menuItems: {
    marginTop: 12,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1.5,
    // borderBottomColor: '#CCCCCC',
    borderBottomColor: 'white',
  },
  menuText: {
    //color: '#800080',
    //color: '#000080',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    
   
  }  
});


export default HamburgerMenu;
