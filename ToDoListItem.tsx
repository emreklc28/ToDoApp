import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyButton from './MyButton';

type Props ={
  handleDelete:(toDo:string)=>void;
  toDo:string

}

const ToDoListItem = ({toDo, handleDelete}:Props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{toDo}</Text>
      <MyButton onPress={()=>handleDelete(toDo)} text="Sil" variant={'destructive'} />
    </View>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({

    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'white',
      alignItems:'center',
      padding:16,
      borderRadius:8,
      borderColor:'grey',
      borderWidth:1,

  },

    text:{
        fontSize:45,
        color:'green',

    },

});
