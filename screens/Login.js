import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function Login (){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
  return(
    <View style={styles.container} >
      <Image source= {require('../assets//logo.jpg')}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text> 
      </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5f2e3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image:{
        marginBottom: 50,
    },
    inputView: {
        backgroundColor: "#73ba9b",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        marginTop: 20,
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn:
      {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#ba2d0b",
        color: "#d5f2e3"
      }
});

export default Login;