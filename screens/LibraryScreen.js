import React, {useState} from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { Avatar, ListItem, SocialIcon, SearchBar } from 'react-native-elements';





export default function LibraryScreen({navigation}) {

const [contenu,setContenu] = useState ([]);
const [recherche, setRecherche] = useState("");
// const [favori, setFavori] = useState([]);
     
// const addBookToFavoris = (item) => {
//   const newBooks = [...favori,item];
//   setFavori(newBooks);
// }





function rechercher(){
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${recherche}&key=AIzaSyBQLTGEppfL-ymwpefXI2z43rzpTkGizuk`)
    .then(res => {
    setContenu(res.data.items);
  })}
  
    
return (
  <ScrollView>
    <View style={styles.container}>
    
        <SearchBar
        placeholder="Rechercher un livre"
        onChangeText={(text) => {setRecherche(text)}}
        value={recherche}
      />
        <Button title="Recherche" color="lightblue" onPress={rechercher}/>
    <FlatList
          data={contenu}
          renderItem={({item})=> (
            <ListItem.Swipeable
            leftContent={
              <Button
                title="détails du livre"
                onPress={() => navigation.navigate('Détails du livre',{
                  livre: item
                  
                })}
                
                />
            }
            >
            <ListItem.Content style={styles.content}>
              
              <Image
         style={styles.logo}
        source={{
          uri:
          "imageLinks" in item.volumeInfo ? item.volumeInfo.imageLinks.thumbnail: 'https://popschool.fr/wp-content/uploads/2019/06/daishi_kaszer.jpg' }}
        
      />
      <ListItem.Title style={styles.bookTitle}>{item.volumeInfo.title}</ListItem.Title>
              </ListItem.Content>
            <ListItem.Chevron />
            </ListItem.Swipeable>)
          }
  
          keyExtractor={item => item.id.toString()}
        />
        
      </View>
    </ScrollView>
  );
}    
  const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  title:{
    textAlign: "center",
    fontSize: 30,
    color:'white'
  },
  description:{
    marginLeft:30,
    
},

bookTitle:{
  fontSize:15
},
description:{
  marginLeft:30,
  
},
logo: {
  width:100,
  height:100
},
content: {
  flexDirection:'row',
  justifyContent:'flex-start',},});