import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import VerticalCard from '../cardSystem/VerticalCard'
import { ActivityIndicator } from 'react-native';
const NearJobs = () => {

    let [dataitems, setdataitems] = useState([])
    let [loading, setloading] = useState(false)

    async function fetchingindianjobs() {

        setloading(true)

        const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all';
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
            setdataitems(result.data)
            setloading(false)
        } catch (error) {
            console.error(error);
            setloading(false)
        }
    }

    useEffect(() => {
        fetchingindianjobs()
    }, [])
    console.log(dataitems, 'dataitems se kj jbi')


    let sampledata = []

    return (
        <SafeAreaView>
            <Text

                style={{
                    padding: '3%',
                    marginTop: 2,
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 800,
                    fontSize: 24
                }}
            >Near By Jobs</Text>


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

export default NearJobs

const styles = StyleSheet.create({})