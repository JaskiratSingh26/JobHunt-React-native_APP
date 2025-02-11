import { FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const LowerHader = () => {
let [data,setdata]=useState('')
let navigation=useNavigation()
  return (

    <SafeAreaView>

    <KeyboardAvoidingView
    
    style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:2
    }}
    >
   <TextInput
   value={data}
   onChangeText={(txt)=> setdata(txt)}
   placeholder='What are you looking for .. '
   style={{
       borderColor:'black',
       borderWidth:2,
       borderRadius:10,
       width:'78%',
       padding:2,
       height:'100%'
    }}
    />

    <View
    style={{
        marginRight:'3%',
        backgroundColor:'#404040',
        padding:9,
        borderRadius:10
    }}
    >


      <TouchableOpacity
      
      onPress={()=>{
        setdata('')
        navigation.navigate('SeachingScreen',{searchingdata:data})
      }}
      >
    <Fontisto name="zoom" size={28} color="white" />
      </TouchableOpacity>
        



    </View>
    </KeyboardAvoidingView>



    </SafeAreaView>
  )
}

export default LowerHader

const styles = StyleSheet.create({})