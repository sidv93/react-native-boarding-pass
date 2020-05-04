import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import passwordIcon from './assets/password.png';
import emailIcon from './assets/email.png';
import Logo from './assets/logo.png';

const LoginButton = ({onLogin}) => {
    return (
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
    )
}

const EmailContainer = () => {
    const [email, setEmail] = useState('');
    const onEmailChange = (value) => {
        setEmail(value);
    }
    return (
        <View style={styles.emailContainer}>
            <View style={styles.centered}>
                <Image source={emailIcon} style={styles.formIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput value={email} onChangeText={onEmailChange} placeholder={'EMAIL'} placeholderTextColor={"#A0B9B7"}
                    style={styles.formInput} />
            </View>
        </View>
    )
}

const PasswordContainer = () => {
    const [password, setPassword] = useState('');
    const onPasswordChange = (value) => {
        setPassword(value);
    }
    return (
        <View style={styles.emailContainer}>
            <View style={styles.centered}>
                <Image source={passwordIcon} style={styles.formIcon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput value={password} onChangeText={onPasswordChange} placeholder={'PASSWORD'} placeholderTextColor={"#A0B9B7"}
                    style={styles.formInput} />
            </View>
        </View>
    )
}

const LoginScreen = ({onLogin}) => {
    return (
        <View style={styles.loginContainer}>
            <Image style={styles.logo} source={Logo} />
            <EmailContainer />
            <PasswordContainer />
            <Text style={styles.forgotPassword} onPress={() => alert('Forgot password')}>Forgot Password?</Text>
            <LoginButton onLogin={onLogin} />
            <Text style={styles.signupLink}>Not a member?
                <Text style={styles.joinNow} onPress={() => alert('Sign up!')}>Join now</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: '#FFCEA1',
        padding: 10,
        borderRadius: 25,
        marginHorizontal: 30,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    loginText: {
        fontSize: 24,
        color: '#425C5A',
        fontWeight: '900',
        textAlign: 'center'
    },
    forgotPassword: {
        color: '#809B99',
        fontSize: 24,
        marginVertical: 25
    },
    signupLink: {
        color: '#809B99',
        fontSize: 24,
        marginVertical: 25
    },
    joinNow: {
        fontSize: 24,
        color: '#FFCEA1'
    },
    emailContainer: {
        borderBottomColor: '#809B99',
        borderBottomWidth: 1,
        marginHorizontal: 30,
        alignSelf: 'stretch',
        marginVertical: 25,
        flexDirection: 'row'
    },
    formIcon: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
        margin: 5
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        alignSelf: 'stretch',
        borderLeftColor: '#809B99',
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formInput: {
        color: '#A0B9B7',
        fontSize: 24,
        alignSelf: 'stretch',
        paddingHorizontal: 20
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginHorizontal: 30
    }
})

export default LoginScreen;
