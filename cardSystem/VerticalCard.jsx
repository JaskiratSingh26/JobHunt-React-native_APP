import { Image, SafeAreaView, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const VerticalCard = ({ item }) => {
  let navigation=useNavigation()
    return (
        <ScrollView
     
        >
            {/* <View
            style={{
                borderColor:'black',
            borderWidth:1,
            margin:3
            }}
            >

              <Image
              
              source={{uri:item?.employer_logo}}
              style={{
                  width:100,
                  height:100
                }}
              />


                </View> */}
 <TouchableOpacity
 
 onPress={() => {
  navigation.navigate('SingleJob', { data: item })
}}
 style={styles.card}>
      <Image 
        source={{ uri: item.employer_logo }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.company}>
          {item.employer_name}
        </Text>
        <Text style={styles.location}>
          {item.job_location}
        </Text>
      </View>
    </TouchableOpacity>

        </ScrollView>
    )
}

export default VerticalCard

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: '5%',
      margin: '3%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 75,
      height: 75,
      borderRadius: 8,
      marginRight: 16,
      backgroundColor: '#f5f5f5', // Light background for logos
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: 4,
    },
    company: {
      fontSize: 14,
      color: '#666666',
      marginBottom: 2,
    },
    location: {
      fontSize: 14,
      color: '#888888',
    },
  });