import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import VerticalCard from '../cardSystem/VerticalCard'

const SeachingScreen = () => {
    let [dataitems, setdataitems] = useState([])
    let [loading, setloading] = useState(false)
    let route = useRoute()

    let { searchingdata } = route.params
    console.log('seraching ...', searchingdata)
    let navigation=useNavigation()
    navigation.setOptions({ title:searchingdata  + '  jobs' });


    async function fetching() {
        setloading(true)
        const url = `https://jsearch.p.rapidapi.com/search?query=${searchingdata}%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c2f57d27e1mshc886441bdb2b492p15adebjsn0bc170c56a18',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data);
            setdataitems(result.data)
            setloading(false)

        } catch (error) {
            console.error(error);
            setloading(false)
        }
    }

    useEffect(() => {
        fetching()
    }, [searchingdata])
    console.log(dataitems, 'data from the serach file ')

    return (
        <SafeAreaView
        
        
        
        style={{
            padding:'3%',
            marginTop:'5%'
        }}


        >





            {loading ? (

                <ActivityIndicator size="large" color="#0000ff" />

            ) : (

                <FlatList


                    data={dataitems}

                    renderItem={({ item, index }) => (
                        <>
                            <VerticalCard item={item} />
                        </>
                    )}
                />

            )}

        </SafeAreaView>
    )
}

export default SeachingScreen

const styles = StyleSheet.create({})