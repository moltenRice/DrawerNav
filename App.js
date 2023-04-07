import 'react-native-gesture-handler';
import { KeyboardAvoidingView ,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import Task from './components/Task';
import Login from './screens/Login';

function Home() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      
    {/* Today's Tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>

      <View style={styles.items}>
        {/* This is where the task will go */}
        {
          taskItems.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Task key={index} text={item}/>
              </TouchableOpacity>
             ) 
          })
        }
      </View>
    </View>
    {/* Write a task */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)} />
      <TouchableOpacity onPress={()=>handleAddTask()} >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

  </View>
  );
}

function Settings() {
  return (
    <View style={styles.container}>
      <Text>I am the Settings Component</Text>

    </View>
  );
}

export default function App() {
  
  const { Navigator, Screen } = createDrawerNavigator();
  
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Login'>
        <Screen name="Home" component={Home}/>
        <Screen name="Settings" component={Settings} />
        <Screen name = "Login" component = {Login}/>

      </Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5f2e3',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    marginTop: 0,
  },
});
