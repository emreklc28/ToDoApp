import { FlatList} from 'react-native';
import React from 'react';
import ToDoListItem from './ToDoListItem';


type Props = {
    toDoList: string []
    handleDelete:(toDo:string)=>void;
}

const ToDoList = ({toDoList,handleDelete }:Props) => {

  return (
    <FlatList
    contentContainerStyle={{gap:15}}
    data={toDoList}
    keyExtractor={(toDo)=> toDo}
    renderItem={({item})=><ToDoListItem handleDelete={handleDelete} toDo={item}/>}

    />
  );
};

export default ToDoList;
