import React from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native';
import { firebase } from '../firebase/Config';
import styles from '../style/style';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    signIn = () => {
        const { email, password } = this.state
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('navigation'))     
            .catch(error => alert(error.message))
    }

    signInAsGuest = () => {
        firebase.auth()
            .signInAnonymously()
            .then(() => this.props.navigation.navigate('navigation'))
            .catch(error => console.log(error.message))
    }

    render() {
        return (
            <View style={styles.test}>

                <View style={styles.logoview}>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                </View>

                <View>
                    <Image style={styles.coffee} source={require('../images/coffee.png')} />
                </View>

                <View>
                    <TextInput
                        style={styles.fieldtext}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder="Email"
                        autoCapitalize="none"
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.fieldtext}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.forgotpass}>
                    <Pressable>
                        <Text style={styles.forgotpasstext}>Forgot password?</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable style={styles.loginbutton} onPress={this.signIn}>
                        <Text style={styles.logintext}>Login</Text>
                    </Pressable>
                </View>

                <View>
                    <Text >
                    <Pressable style={styles.continuebutton}  onPress={() => this.props.navigation.navigate('navigation')}>
                        <Text style={styles.logintext}>Continue without logging in</Text>
                    </Pressable>
                    </Text>
                </View>

                <View>
                    <Text style={{ marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>Don't have an account yet? </Text>
                        <Text style={styles.signupbutton} onPress={() => this.props.navigation.navigate('register')}>Sign up</Text>
                    </Text>
                </View>
            </View>
        )
    }
}