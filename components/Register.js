import React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { firebase, ROOT_REF } from '../firebase/Config';
import styles from '../style/style';

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    Register = () => {
        const { name, email, password} = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => firebase.database().ref(ROOT_REF).push({
                name: name,
                email: email
            }))
            .then(() => this.props.navigation.navigate('navigation'))
            .catch(error => alert(error.message))
    }

    render() {
        return (
            <View style={styles.test}>
                <View>
                    <Text style={styles.registertext}>Register as an user</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.fieldtext}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                        placeholder="Full name"
                    />
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

                <View>
                    <Text style={styles.errortext}></Text>
                </View>

                <View>
                    <Pressable style={styles.loginbutton} onPress={this.Register}>
                        <Text style={styles.logintext}>Register</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={{marginTop: 15}}>
                        <Text style={{ fontWeight: 'bold' }}>Already have an account? </Text>
                        <Text style={styles.signupbutton} onPress={() => this.props.navigation.navigate('login')}>Sign in</Text>
                    </Text>
                </View>
            </View>
        )
    }
}
