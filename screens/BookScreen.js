import React, {useState} from 'react'
import {Button, View, Text, Image, StyleSheet, TextInput, ScrollView} from 'react-native'
import { add } from 'react-native-reanimated';

export default function BookScreen({route}) {
    
  const styles = StyleSheet.create({
        container: {
          alignItems:'center',
          
          
        },
        logo: {
          width: 200,
          height: 200,
          marginTop: 20
        
        },
        
        title:{
          fontWeight:'bold',
          fontSize:20,
          paddingTop:10,
          textAlign:'center'
        },
        author: {
          paddingTop:20,
          textAlign:'center'
        },
        description: {
          padding:20,
          textAlign:'center'
        },
        date: {
          paddingTop:20,
          textAlign:'center'
        }
        
      
      });
      
    const livre = route.params.livre;
    return (
        <ScrollView>
          <View style={styles.container}>
            <Image
         style={styles.logo}
        source={{
          uri:
          "imageLinks" in livre.volumeInfo ? livre.volumeInfo.imageLinks.thumbnail: 'https://popschool.fr/wp-content/uploads/2019/06/daishi_kaszer.jpg' }}
      />
        <View style={styles.content}>
            <Text style={styles.title}>{livre.volumeInfo.title}</Text>
            <Text style={styles.author}>{livre.volumeInfo.authors}</Text>
            <Text style={styles.description}>{livre.volumeInfo.description}</Text>
            <Text style={styles.date}>{livre.volumeInfo.publishedDate}</Text>
            </View>   
        
      </View>
        </ScrollView>
    )
}     
            
  

