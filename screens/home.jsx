import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { useClerk, useUser } from '@clerk/clerk-expo';
import Header from '../components/Header';
import LowerHader from '../components/LowerHader';
import JobTypes from '../components/JobTypes';
import Popular from '../components/Popular';
import NearJobs from '../components/NearJobs';
import axios from 'axios'


// import AsyncStorage from '@react-native-async-storage/async-storage'

const home = () => {
  const { user } = useUser()


  async function connectingbackend() {
    await axios.post('http://192.168.1.42:3000/Register', { email: user?.emailAddresses[0].emailAddress }).then((res) => {
      console.log(res.data, 'home backend data')
    }).catch((err) => {
      console.log(err)
      console.log(res.data, 'home backend data error ')
    })
  }

  useEffect(() => {
   
  }, [user])



  // console.log(user, 'home page se hai')
  // let [username,setusername]=useState()

  // const storeEmail = async () => {
  //   try {
  //     const email = await AsyncStorage.getItem('email')
  //     setusername(email)

  //     if(!email){

  //       await AsyncStorage.setItem('email', user?.emailAddresses[0].emailAddress)
  //       console.log('Email stored in local storage')
  //     }
  //     else{
  //       console.log('email is already presnet ')
  //       console.log(user,'from effect hook')
  //     }
  //   } catch (error) {
  //     console.log(error,'cannot store email address from the heme page to the local storage ')
  //   }
  // }



  // useEffect(() => {
  //   storeEmail()
  // }, [user])
  return (
    <ScrollView
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      {/* <Text
        style={{
          fontSize: 30
        }}

      >home</Text>
      <View >
        <Text >Welcome</Text>
        <Text >{user?.fullName}</Text>
      </View> */}

      <Header />
      <LowerHader />
      <JobTypes />
      <Popular />
      <NearJobs/>

    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})