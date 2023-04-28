import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const server = axios.create({
      timeout: 1000,
      baseURL: 'http://172.19.9.14:5000/',
    });

    async function getPosts() {
      try {
        const response = await server.get('/posts');
        console.log(response);
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
  }, []);

  const renderPost = ({ item: post }) => (
    
    <TouchableOpacity style={styles.postBubble} /*onPress={pressPost}*/>
      <View style={styles.postButton}>
        <Text>{`${post.status} (${post.fixDateTime})`}</Text>
      </View>
      <Text style={styles.sectionTitle}>{post.title}</Text>
      <Text style={styles.postAuthor}>{post.author}</Text>
      <Text style={styles.subsectionTitle}>Problem Description:</Text>
      <Text>{post.content}</Text>
      <Text style={styles.subsectionTitle}>Problem Fix:</Text>
      <Text>{post.fix}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.postId}
        renderItem={renderPost}
        numColumns={1}
        style={styles.postList}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#73BA9B',

    },
    postButton: {
      width : '50%',
      backgroundColor: 'red',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    button: {
      backgroundColor: 'red',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    loginButton: {
  
      alignItems: 'space-between',
      justifyContent: 'space-between',
    },
  
      bugsWrapper: {
        backgroundColor: '#d5f2e3',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      postAuthor:{
        fontSize: 16,
        fontStyle: 'italic',
      },
      subsectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      postStatus: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems: 'flex-end'
      },
      items: {
        marginTop: 30,
      } ,
  
      image: {
          width: '40%',
          height: 175,
          resizeMode: 'stretch',
        },
  
      headerLogo: {
          flex : 1,
          width: '100%',
          height: 100,
          resizeMode: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        },
  
      writeBugWrapper:{
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      input: {
        marginVertical:5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderColor: 'black',
        borderWidth: 0.5,
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
      postList: {
        marginVertical: 20,
      },
      postBubble: {
        backgroundColor: '#edd700',
        padding: 40,
        flex: 1,
        marginVertical : 5 ,
        marginHorizontal : 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
    });

export default Forum;