import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false // hides the header of stack navigator
          }}
        >
          <Stack.Screen name="login" component={Login}
            options={{
              title: "Login",
              headerTitle: "Login"
            }}
          />
          <Stack.Screen name="register" component={Register}
            options={{
              title: "Register",
              headerTitle: "Register"
            }}
          />
          <Stack.Screen name="navigation" component={Navigation}
            options={{
              title: "Navigation",
              headerTitle: "Navigation"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}