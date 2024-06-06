import React from 'react';
import AppNavigator from './src/navigation/index';
import { StyleSheet} from 'react-native';
import { UserProvider } from './src/app/UserContext';

export default function App() {
  return <UserProvider>
            <AppNavigator />
         </UserProvider> ;  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});