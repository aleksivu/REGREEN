import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from '../style/style';

export default class Settings extends Component {
  render() {
      return (
          <View>
              <Text style={styles.smallHeading}>Settings</Text>
          </View>
      )
  }
}