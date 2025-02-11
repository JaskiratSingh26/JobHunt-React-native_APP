// import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import icon from '../assets/icon.png'
// import { useNavigation } from '@react-navigation/native'
// import { useClerk } from '@clerk/clerk-expo';

// import { useOAuth } from "@clerk/clerk-expo"
// import * as Linking from 'expo-linking';
// import * as WebBrowser from 'expo-web-browser'



// const useWarmUpBrowser = () => {
//   React.useEffect(() => {

//     void WebBrowser.warmUpAsync();
//     return () => {
//       void WebBrowser.coolDownAsync();
//     };
//   }, []);
// };

// WebBrowser.maybeCompleteAuthSession();
// const Register = () => {
//   let navigation = useNavigation()
//   useWarmUpBrowser();
//   const clerk = useClerk();
//   const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

//   const handleLogin = async () => {
//     try {
//       const { createdSessionId, setActive } = await startOAuthFlow({
//         redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
//       });

//       if (createdSessionId) {
//         setActive({ session: createdSessionId });
//         navigation.navigate('Home'); 
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };


//   return (
//     <SafeAreaView style={{
//       backgroundColor: 'white',
//       height: '100%'
//     }}  >


//       <View
//         style={{

//           marginTop: '30%'
//         }}
//       >


//         <KeyboardAvoidingView

//           style={{
//             backgroundColor: 'white',
//             alignItems: 'center',
//             justifyContent: 'center',
//             shadowColor: 'black',

//           }}
//         >

//           <Image
//             source={icon}
//             style={{
//               width: '70%',
//               height: 100

//             }}
//           />
//         </KeyboardAvoidingView>



//         <TouchableOpacity
//         style={{
//  // Green color
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     borderRadius: 12,
//     width: "80%",
//     alignItems: "center",
//         }}
//         onPress={handleLogin}
 
//         >
//           <Text
//           style={{
//             color:'blue'
//           }}
//           >
//             Get started
//           </Text>
//         </TouchableOpacity>











//       </View>
//     </SafeAreaView  >

//   )
// }

// export default Register

// const styles = StyleSheet.create({})




import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useClerk, useOAuth } from "@clerk/clerk-expo"
import * as Linking from "expo-linking"
import * as WebBrowser from "expo-web-browser"
import icon from "../assets/icon.png"

const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const Register = () => {
  const navigation = useNavigation()
  useWarmUpBrowser()
  const clerk = useClerk()
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

  const handleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
      })

      if (createdSessionId) {
        setActive({ session: createdSessionId })
        navigation.navigate("Home")
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={icon} style={styles.logo} resizeMode="contain" />
        </View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Get Started with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  logo: {
    width:300,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4285F4",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
})

export default Register

