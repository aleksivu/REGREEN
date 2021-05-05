import React, { Component } from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, Text, View, TouchableHighlight, Pressable } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
// import { createStackNavigator } from '@react-navigation/stack';
// import { firebase, ROOT_REF } from '../firebase/Config';
// import Settings from './Settings';
import styles from '../style/style';
import { firebase } from '../firebase/Config';

// const Stack = createStackNavigator();

export default class Home extends Component {

  // SettingScreen() {
  //   return (
  //     <Stack.Navigator>
  //       <Settings />
  //     </Stack.Navigator>
  //   );
  // }

  constructor() {
    super();
    this.state = {
      cups: 0
    }
  }

  render() {
    return (
      <View>
        <ScrollView >

          <View style={styles.homeUpper}>

            {/* <TouchableHighlight onPress={() => {this.props.navigation.navigate('Settings')}}> */}
            <Icon name="cog" style={styles.cog} />
            {/* </TouchableHighlight> */}

            <Image style={styles.homeCoffee} source={require('../images/coffee.png')} />
            <Text style={styles.welcomeText}>Welcome back, </Text>
            <Text style={styles.welcomeText}>Emma </Text>

            <View style={styles.counters}>
              <Text style={styles.counterText}>Your saved cups</Text>

              <Text style={styles.counterNumbers}>
                <Pressable onPress={() => this.setState({ cups: this.state.cups + 1 })}><Icon name="plus" style={styles.cupCounter} /></Pressable>
                {this.state.cups}
              </Text>

              <Text style={styles.counterText}>Worldwide</Text>
              <Text style={styles.counterNumbers}>155</Text>
            </View>
          </View>

          <Text style={styles.smallHeading}>Nearest return points</Text>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginHorizontal: 0, marginTop: 30 }}>

              <View style={styles.scrollableBox}>
                <Text style={styles.scrollableText}>Oulu University</Text>
                <Text style={styles.scrollableText2}>Pentti Kaiteran katu 1, Oulu</Text>
              </View>

              <View style={styles.scrollableBox}>
                <Text style={styles.scrollableText}>Prisma Linnanmaa</Text>
                <Text style={styles.scrollableText2}>Kauppalinnankuja 1-3, Oulu</Text>
              </View>

              <View style={styles.scrollableBox}>
                <Text style={styles.scrollableText}>Fazer Food</Text>
                <Text style={styles.scrollableText2}>Elektroniikkatie 8, Oulu</Text>
              </View>

            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}