import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import Map from './Map';
import Contact from './Contact';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default class Navigation extends React.Component {

  HomeScreen() {
    return (
      <Home />
    );
  }

  MapScreen() {
    return (
      <Map />
    );
  }

  ContactScreen() {
    return (
      <Contact />
    );
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#738576',
          showLabel: false,
          style: {
            ...Platform.select({
              ios: {
                height: 90,
              },
              android: {
                height: 70,
              },
            }),
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={this.HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={this.MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map-marker" color={color} size={50} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={this.ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="forum" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}