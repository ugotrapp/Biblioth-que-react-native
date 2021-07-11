import React, {useState, useEffect} from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, ListItem, SocialIcon, Switch } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems:'center',  
      backgroundColor:'lightblue',
      height:800
    },
    logo: {
      width: 300,
      height: 300,
      borderRadius:20
      
    },
    buttonSplash: {
      padding:10
    }
    
  
  });



export default function SplashScreen({navigation}) {

  function goToLibraryScreen() {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Librairie', 
          
            }
        
      ]
    })
  }

  
    return (
        <View style={styles.container}>

            <Image
        style={styles.logo}
        source={require('../assets/pb.png')}></Image>
      
      <Button style={styles.buttonSplash} onPress={() => goToLibraryScreen()}
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
      backgroundColor='lightblue'
    />
  }
  title="Acceder à la librairie"
/>
        </View>
    )
}


    

