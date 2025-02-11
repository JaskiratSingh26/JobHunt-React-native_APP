
import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import home from './screens/home';
import Register from './screens/Register';
import Login from './screens/Login';
import Otpscreen from './screens/Otpscreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ItemScreen from './dynamic-screen/Item-Screen';
import Singlejob from './SInglejobpage/Singlejob';
import ApplyOptions from './screens/ApplyOptions';
import SeachingScreen from './screens/SeachingScreen';
import ViewApplied from './screens/ViewApplied';

const StackNavigator = () => {




  const Stack = createNativeStackNavigator();




  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Register'}

        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otpscreen} />
        <Stack.Screen name="ViewApplied" component={ViewApplied} 
        
        options={{
          headerShown:true,
          title:'Favourite jobs '
        }}
        
        />
        <Stack.Screen name="SeachingScreen" component={SeachingScreen}
            options={{
              headerShown:true
              ,
             
            }}
        
        />
        <Stack.Screen name="ApplyOptions" component={ApplyOptions}
        options={{
          headerShown:true
          ,
          headerTitle:'Apply Links '
        }}
        />
        <Stack.Screen name="SingleJob" component={Singlejob}
       
        
        options={{headerShown:true}}/>
        <Stack.Screen name="itemScreen" component={ItemScreen}
        
options={{headerShown:true}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})


// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native'
// import home from './screens/home';
// import Register from './screens/Register';
// import Login from './screens/Login';
// import Otpscreen from './screens/Otpscreen'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useUser      } from '@clerk/clerk-expo';

// const StackNavigator = () => {
//   const [userpresent, setpresent] = useState(false)
//   const [loading, setLoading] = useState(true)

//   const checkUser      = async () => {
//     const email = await AsyncStorage.getItem('email')
//     if (email) {
//       setpresent(true)
//     } else {
//       setpresent(false)
//     }
//     setLoading(false)
//   }

//   useEffect(() => {
//     checkUser     ()
//   }, [])

//   if (loading) {
//     return <View><Text>Loading...</Text></View>
//   }

//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       {userpresent ? (
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false
//           }}
//         >
//           <Stack.Screen name="Home" component={home} />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false
//           }}
//         >
//           <Stack.Screen name="Register" component={Register} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Otp" component={Otpscreen} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   )
// }

// export default StackNavigator

// const styles = StyleSheet.create({})