import {Alert, StyleSheet,View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyTextInput from './MyTextInput';
import MyButton from './MyButton';
import ToDoList from './ToDoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_TODO_LIST = 'todos';
const KEY_CURRENT_TODO = 'current_todo';

const App = () => {

  const [toDoList, setToDoList] = useState<string[]>([]);
  const [toDo, setToDo] = useState('');


  //kalıcı hale getirme
  useEffect(() => {
      async function getToDos() {
        const todos = await AsyncStorage.getItem(KEY_TODO_LIST);
          if (todos !== null) {
            setToDoList(JSON.parse(todos));

            }
      }
      async function getCurrentToDo() {
        const todo = await AsyncStorage.getItem(KEY_CURRENT_TODO);
          if (todo !== null) {
            setToDo(todo);

          }
      }
      getToDos();
      getCurrentToDo();

  }, []);

    const saveTodosToStorage = async (newList: string[])=>{
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem(KEY_TODO_LIST, jsonValue);
    };



      //listeye ekleme işlemi komple.
  const handlePress = async ()=>{
    if(toDo.trim() === ''){
      Alert.alert('Uyarı','Yapılacaklar Listesi Boş Bırakılamaz');
      return;
    }
    const newList = [...toDoList,toDo]
    setToDoList(newList)  // todo liste todo  yu ekliyoruz.
    setToDo(''); // ekledikten sonra inputtexti boşaltıyoruz.
    saveTodosToStorage(newList);
  };

  const onDelete = (deletedToDo: string)=>{
    const newList = toDoList.filter((toDo)=> toDo !== deletedToDo );
    setToDoList(newList);
    saveTodosToStorage(newList);

  };
  const handleSetToDo = async (text:string)=>{
    setToDo(text);
    await AsyncStorage.setItem(KEY_CURRENT_TODO, text);


  };

  return (
    <View style={styles.container}>
      <MyTextInput value={toDo}  onChangeText={handleSetToDo} placeHolder="Yapılacaklar Giriniz..." />
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
