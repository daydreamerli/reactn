import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function Sandbox(){

    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
     
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        // flex:1,      // flex to the bottom
        flexDirection:'row',
        justifyContent:'space-around',
        // alignItems:'center',
        paddingTop:40,
        backgroundColor:'#ddd',
    },
    boxOne:{
        flex:1,
        backgroundColor:"violet",
        padding:10,
    },
    boxTwo:{
        flex:1,
        backgroundColor:"gold",
        padding:10,
    },
    boxThree:{
        flex:1,
        backgroundColor:"coral",
        padding:10,
    },
    boxFour:{
        flex:1,
        backgroundColor:"skyblue",
        padding:10,
    }

});