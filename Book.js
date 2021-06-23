import { Feather } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Person({name,description}) {
    return (
        <View style={styles.paragraphe}>
            <Text style={styles.name}> 
        <Feather name="book" size={24} color="black"  /> {name} 
        </Text>
        <Text style={styles.description}>{description}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    description:{
        marginLeft:30,
        
    },
    name:{
        fontSize: 20,
        fontWeight:"bold"
    },
    paragraphe:{
        padding:15
    }
})