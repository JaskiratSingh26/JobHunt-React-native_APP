



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import StackNavigator from './StackNavigator';




const App = () => {
  

  


 
  return (


    <ClerkProvider publishableKey='pk_test_bmVlZGVkLXJvZGVudC0xLmNsZXJrLmFjY291bnRzLmRldiQ'>



      <StackNavigator />




    </ClerkProvider>


  )
}

export default App

const styles = StyleSheet.create({})