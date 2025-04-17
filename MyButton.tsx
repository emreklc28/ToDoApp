import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
type Props={
  text:string
  onPress?: ()=> void
  variant?:
  'primary' | 'secondary' | 'destructive'| 'success';

}

const MyButton = ({text,onPress, variant = 'primary'}:Props) => {
  let backgroundColor = 'dodgerblue';
  switch (variant) {
    case 'primary':
      backgroundColor = 'dodgerblue';
      break;
    case 'secondary':
      backgroundColor = 'blueviolet';
      break;
    case 'destructive':
        backgroundColor = 'red';
        break;
    case 'success':
          backgroundColor = 'green';
          break;

    default:
      backgroundColor = 'dodgerblue';
      break;
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor:backgroundColor}]}>
      <Text style={styles.text}>{text}  </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'dodgerblue',
        alignSelf:'flex-start',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:16,
        minWidth:80,
        borderRadius:10,


    },
    text:{
        fontSize:45,
        color:'white',
        textAlign:'center',
    },
});
