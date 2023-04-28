import { KeyboardAvoidingView ,StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import React, {useState} from 'react';
import Post from '../components/Post';
import { createDrawerNavigator } from '@react-navigation/drawer';
import settings from '../App';
import Forum from './Forum';
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Forum" component={Forum} />
    </Drawer.Navigator>
  );
}

function Home() {
    const [post, setPost] = useState();
  
    const [postItems, setPostItems] = useState([]);
  
    const handleAddPost = () => {
      Keyboard.dismiss();
      setPostItems([...postItems, post]);
      setPost(null);
    }
  
      const completePost = (index) => {
        let itemsCopy = [...postItems];
        itemsCopy.splice(index, 1);
        setPostItems(itemsCopy);
    }
    return (
    
        <View style={styles.container}>
          
        {/* Today's Posts */}
        <View style={styles.postsWrapper}>
          <Text style={styles.sectionTitle}>Today's Posts</Text>
    
          <View style={styles.items}>
            {/* This is where the post will go */}
            {
              postItems.map((item, index) => {
                return(
                  <TouchableOpacity key={index} onPress={()=>completePost(index)}>
                  <Post key={index} text={item}/>
                  </TouchableOpacity>
                ) 
              })
            }
          </View>
        </View>
        {/* Write a post */}
   
          <TouchableOpacity style={styles.addPostBtn} onPress={()=>handleAddPost()} >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>


      </View>

    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 200,
      backgroundColor: '#73BA9B',
    },
    postsWrapper: {
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
    writePostWrapper:{
      position: 'absolute',
      bottom: 0,
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
    addPostBtn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    }
  });

export default Home;