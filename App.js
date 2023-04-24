import 'react-native-gesture-handler';
import { KeyboardAvoidingView ,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';



const Drawer = createDrawerNavigator();

const AuthStack = createNativeStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={({navigation})=>({
          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert('Hold on!', 'Are you sure you want to log out?', [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'YES', onPress: () => navigation.navigate("Login")},
            ])} >
                <Text>Log Out</Text>
            </TouchableOpacity>
          ), 

          headerShown: true,
          headerStyle: { backgroundColor: '#D5F2E3' },
        })}/>
      <Drawer.Screen name="Settings" component={Settings} options={({navigation})=>({
          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert('Hold on!', 'Are you sure you want to log out?', [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'YES', onPress: () => navigation.navigate("Login")},
            ])} >
                <Text>Log Out</Text>
            </TouchableOpacity>
          ), 

          headerShown: true,
          headerStyle: { backgroundColor: '#D5F2E3' },
        })} />
    </Drawer.Navigator>
  );
}


export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{headerStyle:{backgroundColor:"#D5F2E3"}}} >
        <AuthStack.Screen style={styles.Nav} name="Login" component={Login} options={{title:'Log In',}}/>
    
        <AuthStack.Screen name="Home" component={DrawerRoutes} options={{headerShown:false}} ></AuthStack.Screen>
        
      </AuthStack.Navigator>
      
    </NavigationContainer>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5f2e3',
  },
  logoutBtn: {
    width: 100,
    backgroundColor: "#BA2D0B",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    
  },
  Nav: {
    backgroundColor: '#D5F2E3',
  },

});
