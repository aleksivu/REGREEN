import React, { Component } from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from 'react-native';
import styles from '../style/style';

export default class Contact extends Component {
    render() {

        return (
            <View>
            
                <View style={styles.ContactUsUpper}>
                    <View>
                        <Text style={styles.ContactUsText}>Need help with something? </Text>
                    </View>

                    <View>
                        <Pressable>
                            <Icon name="email" style={styles.Email} /> 
                            <Text style={styles.ContactEmail}>Email us</Text>
                            <Icon name="phone" style={styles.Phone} />
                            <Text style={styles.ContactPhone}>Call us</Text>
                            </Pressable>
                            
                        
                    </View>

                    
                
                </View>
                
                <View>
                    <Text style={styles.ContactUsBottom}>We are happy to help you</Text>
                    <Text style={styles.ContactUsBot}>You can reach us during the office hours</Text>
                    <Text style={styles.ContactUsBot}>mon - fri</Text>
                    <Text style={styles.ContactUsBot}>09:00 - 17:00</Text>
                    <Text style={styles.ContactUsBottom}>We will get back to you as soon as possible.</Text>
                </View>


            </View>
        )
    }
}