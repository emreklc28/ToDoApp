import { StyleSheet,TextInput} from 'react-native';
import React from 'react';

type Props= {
    placeHolder?:string
    value?:string
    onChangeText?:(text:string) => void

}

const MyTextInput = ({placeHolder,value,onChangeText}:Props) => {
  return (

      <TextInput keyboardType="default" value={value} onChangeText={onChangeText} placeholder={placeHolder} style={styles.input}/>

  );
};

export default MyTextInput;

const styles = StyleSheet.create({
    input:{
        borderWidth:4,
        borderRadius:8,
        paddingVertical:4,
        paddingHorizontal:8,
        fontSize:42,
        backgroundColor:'orange',

    },

});
