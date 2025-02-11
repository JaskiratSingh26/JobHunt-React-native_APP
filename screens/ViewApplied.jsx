import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/clerk-expo'

import VerticalCard from '../cardSystem/VerticalCard'

const ViewApplied = () => {

    let [dataitems, setdataitems] = useState([])
    let { user } = useUser()
    let [loading, setloading] = useState(false)
    async function fetch() {

        setloading(true)
        await axios.post('http://192.168.1.42:3000/favJob', {
            email: user?.emailAddresses[0].emailAddress
        }).then((res) => {

            setloading(false)
            setdataitems(res.data.messgae)

        }).catch((error) => {
            console.log(error, 'from the fav jov view apllied file ')
        })

    }

    useEffect(() => {
      
    }, [])
    console.log(dataitems, 'FAV JOBS')

    return (
  <View>
    <Text  
    
    style={{
        textAlign:'center'
    }}>
        this page will not work due to backend problem 
    </Text>
  </View>
    )
}

export default ViewApplied

const styles = StyleSheet.create({})