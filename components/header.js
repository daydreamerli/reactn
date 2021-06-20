import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default function Header() {
    return(
        <View>
            <Text style={styles.title}>My Todos List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 
      title:{
        fontWeight:'bold',
        fontSize:26,
        padding:20,
        paddingLeft:40,
        marginTop:40,
        backgroundColor:'#fff',
        marginHorizontal:15,   
      },
})