import React , {Component} from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from '../config';
firebaseConfig

export class LoginPage extends Component {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId: 757257647361-ats1bdg7672f0i8mm316rf6dl2i0q09t.apps.googleusercontent.com,
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  
	constructor(props){
    super(props);
    this.state = {email: '', senha: ''};
}

loginApp = async() => {

    

    if( (this.state.email == '') || (this.state.senha == '') || (this.state.email == '' && this.state.senha == '') ){
        Alert.alert("Erro ao entrar!");      
    }
    else{

        try {
            const user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);
    this.props.navigation.navigate("HomePage");
        }
        catch(err){
            Alert.alert("Erro ao entrar!");
        }
    }
}

static navigationOptions = {

    header: null
    
   };


  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.textfields}>
          <TextInput style = {styles.input}
            placeholder = "Email"
            returnKeyType = "next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            onChangeText={(email) => this.setState({email})}   
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
         />
          <TextInput style = {styles.input}
            placeholder = "Senha"
            returnKeyType = "go"
            secureTextEntry
            onChangeText={(senha) => this.setState({senha})}
            ref = {(input) => this.passwordInput =input}
            autoCapitalize = "none"
            autoCorrect = {false}
          />
          <TouchableOpacity style = {styles.buttoncontainer}  onPress={this.loginApp}>
            <Text style = {styles.buttontext}  onPress={this.loginApp}> Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttoncontainer1} onPress = {() => this.props.navigation.navigate('RegisterPage')}>
            <Text style = {styles.buttontext}> Registrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttoncontainer2} onPress = {() => this.props.navigation.navigate('TablePage')}>
            <Text style = {styles.buttontext}> Tabela</Text>
          </TouchableOpacity> 
        </View>
      </View>
    )
  }
}

const styles = {
  container : {
    padding : 20,
    flex : 1,
    backgroundColor: '#ecf0f1',
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
    color: '#34495e'
  },
  buttoncontainer: {
    height: 50,
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttoncontainer1: {
    height: 50,
    backgroundColor: '#249acf',
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttoncontainer2: {
    height: 50,
    backgroundColor: '#ff9a32',
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttontext: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontSize: 20
  }
}

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
// import LoginPage from './components/LoginPage.js'
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import TablePage from './TablePage';

const RootStack = createStackNavigator({
    LoginPage: {
        screen: LoginPage
    },
    RegisterPage: {
        screen: RegisterPage
    },
    HomePage: {
        screen: HomePage
    },
    TablePage: {
      screen: TablePage
    }
});

const App = createAppContainer(RootStack);

export default App;