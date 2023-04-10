import React from 'react';
import { KeyboardAvoidingView ,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';


function Settings() {
    return (
      <View style={styles.container}>
        <Text>I am the Settings Component</Text>
  
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#73BA9B',
    },
  });

export default Settings;