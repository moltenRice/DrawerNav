import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';


function Login ({navigation}){
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const server = axios.create({
      timeout: 1000,
      baseURL: 'http://172.19.9.14:5000/',
    });



    async function login(){
      try{
        const response = await server.get('/users');
        console.log(response);
        setUser(response?.data);
    if (response?.data?.user?.email === email && response?.data?.user?.password === password){
      navigation.navigate('Home');
    }else if (response?.data?.user?.email !== email && response?.data?.user?.password !== password){
      alert('Email or password are incorrect');
    }else if (response?.data?.user?.email !== email){
      alert('Email is incorrect');
    }else if (response?.data?.user?.password !== password){
      alert('Password is incorrect');
    }else if (response?.data?.user?.email === undefined && response?.data?.user?.password === undefined){
      alert('Email and password are incorrect');
    }
  }catch(error){
    console.log(error)
  }
    }

  return(
    <View style={styles.container} >
      <Image source= {require('../assets//logo.jpg')}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        /> 

      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword}
        /> 
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={(login)} >
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 0,
        marginLeft: -200,
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