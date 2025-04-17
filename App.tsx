import {Alert, StyleSheet,View } from 'react-native';
import React, { useState } from 'react';
import MyTextInput from './MyTextInput';
import MyButton from './MyButton';
import ToDoList from './ToDoList';

const App = () => {

  const [toDoList, setToDoList] = useState<string[]>([]);
  const [toDo, setToDo] = useState('');


      //listeye ekleme işlemi komple.
  const handlePress = ()=>{
    if(toDo.trim() === ''){
      Alert.alert('Uyarı','Yapılacaklar Listesi Boş Bırakılamaz');
      return;
    }
    setToDoList([...toDoList,toDo])// todo liste todo  yu ekliyoruz.
    setToDo(''); // ekledikten sonra inputtexti boşaltıyoruz.
  };

  const onDelete = (deletedToDo: string)=>{
    const newList = toDoList.filter((toDo)=> toDo !== deletedToDo );
    setToDoList(newList);

  };
  return (
    <View style={styles.container}>
      <MyTextInput value={toDo}  onChangeText={setToDo} placeHolder="Yapılacaklar Giriniz..." />
      <MyButton text="Listeye Ekle" onPress={()=> handlePress()}  />
        <ToDoList handleDelete={onDelete} toDoList={toDoList}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50,
    padding:16,
    gap:10,

  },
});
