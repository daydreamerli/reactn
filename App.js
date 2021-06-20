import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header'; 
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {

  const [todos,setTodos]=useState([
    {text:'Making coffee',key:'1'},
    {text:'Create an app',key:'2'},
    {text:'Go to the GYM',key:'3'},
  ]);

  const pressHandler=(key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) =>{
    if(text.length >5){
      setTodos((prevTodos) => {
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ];
    })
    }else{
      Alert.alert('Oops',"Todos must be over 5 chars long",[
        {text:'Understood',onPress:() => console.log('alart closed')}
      ])
    }
 
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress = {() =>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to form*/}
        <AddTodo submitHandler = {submitHandler}/>
        <View style={styles.list}>    
          <FlatList 
            data={todos}
            renderItem={({item}) =>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
);
}            

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:10,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content:{
    flex:1,
    padding:20,
    // backgroundColor:'red',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  list:{
    flex:1,
    marginTop: 20,
  },

});