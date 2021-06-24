import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import Book from './Book';

export default function App() {
  
  
  const [searchInput, setSearchInput] = useState("");

  const [books, setBooks] = useState([
    {name: "ASTERIX Tome 39 - Astérix et le Griffon" 
    ,description:"Astérix, Obélix et Idéfix sont de retour pour une 39e aventure. Accompagnés du plus célèbre des druides, ils s’apprêtent à partir pour un long voyage en quête d’une créature étrange et terrifiante."},
    {name: "Lucky Luke - L'Élixir du docteur Doxey" 
    ,description: `Avec pour seul compagnon son cheval Jolly Jumper, "l'homme qui tire plus vite que son ombre" fait régner l'ordre et la justice dans un Far-West de fantaisie mille fois plus vrai que le vrai. Poursuivant les terribles frères Dalton ou croisant la route de divers personnages historiques, Lucky Luke nous fait découvrir dans la bonne humeur les dessous de la conquête de l'Ouest.`},
    {name:"Les Schtroumpfs - Le Cosmoschtroumpf", description:`Qui ne connaît les Schtroumpfs ? Ces gentils lutins bleus à gros bonnet blanc se ressemblent tous, même s'ils ont chacun leur caractère, et parlent une curieuse langue dans laquelle la plupart des mots sont remplacés par "schtroumpf" ou "schtroumpfer". Sous l'autorité débonnaire du grand Schtroumpf, ce sympathique petit peuple organise sa vie et lutte contre l'abominable sorcier Gargamel, qui ne rêve que de les détruire.`},
    {name:"Lucky Luke - À l'ombre des derricks", description:`Le 27 Août 1859, le colonel Drake découvre un gisement d'or noir à Titusville. Immédiatement, c'est la ruée. Le maire appelle Lucky Luke pour maintenir l'ordre. Quand il arrive, tout le monde est en train de forer, du shérif au croque-mort. Dès qu'un puits est ouvert, c'est la bagarre. Puis arrive Barry Blunt, un riche prospecteur accompagné de ses hommes qui rachète un à un tous les puits à leur propriétaire. Mais ses méthodes plus que douteuses lui attirent le courroux de Lucky Luke.`},

    
  ])

  
  function search(){
    setBooks(books.filter(book => book.name.includes(searchInput)));
    }
  
  const peopleJSX = books.map(book => {
    return <Book name={book.name} description={book.description} />
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        
        
        <Text style={styles.title}>Bibliothèque</Text>


          <View style={styles.formulaire}>
          
            <TextInput style={styles.input} value={searchInput}
            onChangeText={(text) => {setSearchInput(text)}} placeholder="Rechercher un livre" />
            <Button title="Ok" color="#f39c12" onPress={search}/>
          </View>

          {peopleJSX}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title:{
    textAlign: "center",
    fontSize: 30
  },
  input: {
    borderWidth: 2,
    borderColor: '#f39c12',
    margin: 2,
    marginLeft: 20,
    padding: 5
  },
  formulaire: {
    flexDirection: 'row'
  }
});
