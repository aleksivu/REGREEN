import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    navigation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {
        flex: 1,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoview: {
        alignContent: 'flex-end',
    },
    logo: {
        height: 40,
        width: 200,
        resizeMode: 'contain',
    },
    coffee: {
        height: 240,
        width: 250,
        resizeMode: 'contain',
    },
    fieldtext: {
        backgroundColor: '#ffffff',
        margin: 5,
        padding: 10,
        borderRadius: 50,
        width: 350,
        textAlign: 'center',
    },
    forgotpass: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
    },
    forgotpasstext: {
        color: '#ACACAC',
    },
    loginbutton: {
        alignItems: 'center',
        backgroundColor: '#738576',
        borderRadius: 30,
        width: 150,
        padding: 15,
        margin: 5,
    },
    continuebutton: {
        alignItems: 'center',
        backgroundColor: '#C0BAB3',
        borderRadius: 30,
        width: 250,
        ...Platform.select({
            ios: {
                margin: 1,
                padding: 15,
            },
            android: {
                margin: 5,
                padding: 15,
            },
        }),
    },
    logintext: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    signupbutton: {
        color: '#72AA6D',
        fontWeight: 'bold',
    },
    registertext: {
        fontSize: 25,
        marginBottom: 20,
    },
    errortext: {
        color: 'red',
    },
    homeUpper: {
        backgroundColor: '#C0BAB3',
        borderBottomRightRadius: 70,
        ...Platform.select({
            ios: {
                height: 540,
            },
            android: {
                height: 515,
            },
        }),
    },
    homeBottom: {
        backgroundColor: '#FFFFFF',
        height: 550,
    },
    welcomeText: {
        color: '#738576',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    counterText: {
        color: '#4F4F4F',
        fontSize: 16,
        textAlign: 'right',
    },
    wwCounterText: {
        color: '#828282',
        fontSize: 14,
        textAlign: 'right',
    },
    counterNumbers: {
        color: '#4F4F4F',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 5,
        textAlign: 'right',
    },
    smallHeading: {
        color: '#828282',
        fontSize: 16,
        marginLeft: 15,
        ...Platform.select({
            ios: {
                marginTop: 35,
            },
            android: {
                marginTop: 10,
            },
        }),
    },
    homeCoffee: {
        height: 240,
        width: 290,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    counters: {
        alignSelf: 'flex-end',
        marginRight: 50,
    },
    scrollableBox: {
        backgroundColor: "#738576",
        height: 130,
        width: 250,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    scrollableText: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: 'center',
        marginTop: 40,
        fontWeight: 'bold',
    },
    scrollableText2: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: 'center',
    },
    cog: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginRight: 20,
        color: "#393939",
        fontSize: 25,
        ...Platform.select({
            ios: {
                marginTop: 60,
            },
            android: {
                marginTop: 25,
            },
        }),
    },
    cupCounter: {
        fontSize: 25,
        marginRight:20,
    },
    ContactUsUpper: {
        backgroundColor: '#C0BAB3',
        borderBottomRightRadius: 70,
        height: 300,
    },
    ContactUsText: {
        color: '#738576',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 30,
    },
    Email: {
        backgroundColor: '#738576',
        fontSize: 70,
        alignSelf: 'center',
        marginRight: 100,
        marginTop: 60,
        marginBottom: -60,
        borderRadius: 10,
    },
    Phone: {
        fontSize: 70,
        backgroundColor: '#738576',
        alignSelf: 'center',
        marginLeft: 100,
        borderRadius: 10,
        
    },
    ContactEmail: {
        fontSize: 18,
        alignSelf: 'center',
        marginRight: 100,
        marginTop: 60,
        marginBottom: -95,
    },
    ContactPhone: {
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 100,
    },
    ContactUsBottom: {
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    ContactUsBot: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#006400',
    },
});