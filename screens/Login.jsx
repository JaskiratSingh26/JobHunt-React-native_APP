import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icon from '../assets/icon.png'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    let navigation=useNavigation()

  return (
    <SafeAreaView style={{
        backgroundColor:'white',
        height:'100%'
      }}  >
  
  
  <View
  style={{

    marginTop:'30%'
  }}
  >

  
  <KeyboardAvoidingView
  
  style={{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'black',
  
  }}
  >
  
    <Image
     source={icon}
     style={{
      width:'70%',
      height:100
  
     }}
    />
  </KeyboardAvoidingView>
  

    <Text
    
    style={{
      textAlign:'center'
      ,
      fontSize:20,
      fontWeight:900,
      fontFamily:'serif',
      marginTop:'10%'
    }}
    >
      
Login  Your Account
      
    </Text>

        
  
  <KeyboardAvoidingView
  
  style={{
     marginTop:'15%',
    flexDirection:'column',
    gap:15,
  
    alignItems:'center'
  }}
  >
  


  <View  
  
  style={{
    
    width:'80%'
  }}
  >
  

  
  
  </View>

  <View  
  
  style={{
    
    width:'80%'
  }}
  >
  
  <TextInput
    //  value={email}
    //  onChangeText={(txt)=> setemail(txt)}
  
  placeholder='Enter Your Email'
  style={{
    borderColor:'black',
    borderWidth:2,
    padding:16,
    borderRadius:14
  
  }}
  />
  
  
  </View>
  <View
  
  style={{
    
    width:'80%'
  }}>
  <TextInput
    //  value={password}
    //  onChangeText={(txt)=> setpassword(txt)}
  
  placeholder='Enter Your Password '
  style={{
    borderColor:'black',
    borderWidth:2,
   padding:16,
    borderRadius:14
  
  }}
  />
  </View>
  
  
  </KeyboardAvoidingView>
  
  

  
  <View>
  
  <TouchableOpacity   style={{
    
    alignSelf:'center',
    padding:'2.5%'
    ,
    marginTop:'10%',
    borderRadius:10,
    width:'33%',
    borderColor:'blue',
    borderWidth:2,
    backgroundColor:'#e9eaed'
  
  }} >
    <Text  style={{
      color:'blue',
      fontWeight:500,
      textAlign:'center'
    }}
    
    
    onPress={()=>{
    //  handelclick()
    }}
    >Login </Text>
  </TouchableOpacity>
  
  </View>
  
  <Text  style={{
    textAlign:'center',
    marginTop:'4%'
  }} 
  
  onPress={()=>{
    navigation.navigate('Register')
  }}
  >Dont't have an account ? <Text
  
  
  style={{color:'blue',
    textDecorationLine:'underline'
  }}>
    Register
  </Text>
  
  
  
    </Text>

</View>
      </SafeAreaView  >

  )
}

export default Login

const styles = StyleSheet.create({})