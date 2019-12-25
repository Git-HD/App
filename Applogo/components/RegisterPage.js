import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from '../config';

import { createStackNavigator } from 'react-navigation';

export default class RegisterPage extends Component {
    state = {

        email: '',
    
        password: '',
    
        authenticating: false,
    
        user: null,
    
        error: '',

        success: ''
    
      }
    
 firebaseConfig
    
      onPressSignIn() {
    
        this.setState({
    
          authenticating: true,
    
        });
    
    
    
        const { email, password } = this.state;
    
    
    
        firebase.auth().signInWithEmailAndPassword(email, password)
    
          .then(user => this.setState({
    
            authenticating: false,
    
            user,
    
            error: '',

            success: Alert.alert('registrado com sucesso')
    
          }))
    
          .catch(() => {
    
            // Login was not successful
    
            firebase.auth().createUserWithEmailAndPassword(email, password)
    
              .then(user => this.setState({
    
                authenticating: false,
    
                user,
    
                error: '',
    
              }))
    
              .catch(() => this.setState({
    
                authenticating: false,
    
                user: null,
    
                error: Alert.alert('Erro ao registrar'),
    
              }))
    
          })
    
      }
    
    
    
      onPressLogOut() {
    
        firebase.auth().signOut()
    
          .then(() => {
    
            this.setState({
    
              email: '',
    
              password: '',
    
              authenticating: false,
    
              user: null,
    
            })
    
          }, error => {
    
            console.error('Sign Out Error', error);
    
          });
    
      }


    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.registerform}>
            <TextInput style = {styles.input}
            placeholder = "Digite seu nome"
            returnKeyType = "next"
            onSubmitEditing = {() => this.emailinput.focus()}
            />
            <TextInput style = {styles.input}
            placeholder = "Digite seu email"
            returnKeyType = "next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            ref = {(input) => this.emailinput =input}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput style = {styles.input}
            placeholder = "Digite sua senha"
            returnKeyType = "go"
            secureTextEntry
            ref = {(input) => this.passwordInput =input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text>{this.state.error}</Text>
          <Text>{this.state.success}</Text>
          <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.onPressSignIn()}>
            <Text style = {styles.buttontext}> Registrar</Text>
          </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ecf0f1',
    },
    registerform: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#1abc9c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e',
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center'
    },
        buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}