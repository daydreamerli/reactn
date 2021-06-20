import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default function TodoItem({item,pressHandler}) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

      item:{
        fontWeight:'bold',
        fontSize:20,
        padding:20,
        marginTop:40,
        backgroundColor:'coral',
      },
})