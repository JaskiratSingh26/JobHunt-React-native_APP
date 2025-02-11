import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {  useRoute } from '@react-navigation/native'

import { Linking } from 'react-native';
const ApplyOptions = () => {
    let route=useRoute()
    let {data}=route.params
    console.log(data,'from the aplly links files')
  return (
    <ScrollView>
      <Text
      style={{
        padding:'3%',
        fontFamily:'serif',
        fontStyle:'italic',
        fontSize:18,
        fontWeight:800
      }}

      >
        Apply Options
      </Text>
      <View>
        {data.map((item,index)=>(
            <>
            <TouchableOpacity
            
            onPress={()=>{
                Linking.openURL(item.apply_link);
            }}
            >

         
            <Text
            numberOfLines={1}
            style={{
                padding:'3%',
                fontFamily:'serif',
                fontSize:15,
                fontStyle:'italic',
                color:'blue',
              marginTop:20
                
            }}
            >    {index+1}   {item.apply_link}
            </Text>


            </TouchableOpacity>
            
            </>
        ))}
      </View>
    </ScrollView>
  )
}

export default ApplyOptions

const styles = StyleSheet.create({})