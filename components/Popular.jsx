import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Horixontalcard from '../cardSystem/Horixontalcard'
import { useNavigation } from '@react-navigation/native'

import { ActivityIndicator } from 'react-native';
const Popular = () => {

    let [dataitems, setdataitems] = useState([])
    let [loading, setloading] = useState(false)
    let navigation = useNavigation()
    // let sampledata = [
    //     { "apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtvHSyl2d-AxEwk4dPW3QjW7gp1VB2PgL26dF&s=0", "employer_name": "Zentro", "employer_website": "https://zentrointernet.com", "job_apply_is_direct": true, "job_apply_link": "https://www.adzuna.com/details/5041932554?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "About Us..." },
    //     { "apply_options": [Array], "employer_logo": null, "employer_name": "Pizza Hut", "employer_website": "https://www.pizzahut.com", "job_apply_is_direct": false, "job_apply_link": "https://jobs.pizzahut.com/job/?ProductionCook-CHICAGO-IL-j-c717238d-420b-4905-9f07-e827757b249e&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "Working at Pizza Hut® is about making hungry people happy..." },
    //     { "apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWy2Ujy1aurWyJwrDYy7Not2vpeOma3ip4B6I7&s=0", "employer_name": "Levi Strauss & Co.", "employer_website": "https://www.levistrauss.com", "job_apply_is_direct": false, "job_apply_link": "https://www.linkedin.com/jobs/view/levi-store-wicker-park-part-time-stylist-chicago-il-at-levi-strauss-co-4147210788?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "Job Description..." },
    //     { "apply_options": [Array], "employer_logo": null, "employer_name": "Bloomberg L.P.", "employer_website": "https://www.bloomberg.com", "job_apply_is_direct": false, "job_apply_link": "https://www.adzuna.com/details/5041041802?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "Bloomberg News is looking for an experienced and versatile reporter..." },
    //     { "apply_options": [Array], "employer_logo": null, "employer_name": "Power Construction", "employer_website": "https://www.powerconstruction.net", "job_apply_is_direct": false, "job_apply_link": "https://www.ziprecruiter.com/c/Power-Construction/Job/Union-Laborer/-in-Chicago,IL?jid=4d55fcc38a1ff5e7&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "POSITION SUMMARY:..." },
    //     { "apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpnKjnF4t-ZhrWFQz_8qkimGNQ4hnqz09YM47&s=0", "employer_name": "Coca Cola Careers", "employer_website": "https://careers.coca-colacompany.com", "job_apply_is_direct": false, "job_apply_link": "https://careers.coca-colacompany.com/job/21378225/senior-director-safety-chicago-il/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "fairlife, LLC is a Chicago-based nutrition company..." }]




    async function fetching() {
        setloading(true)
        const url = 'https://jsearch.p.rapidapi.com/search?query=popular%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all';
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
    }, [])
    return (
        <SafeAreaView

            style={{
                padding: '1%',
                marginTop: '4%'
                ,
                width: '100%'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 24,
                            fontStyle: 'italic',
                            fontFamily: 'serif',
                            fontWeight: 800
                        }}
                    >Popular Jobs</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('itemScreen', { jobtype: 'popular' })
                    }}
                    style={{
                        marginRight: '3%',
                        backgroundColor: '#404040',
                        padding: 9,
                        borderRadius: 10,
                        width: '25%'
                    }}
                >

                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 10,
                            fontStyle: 'italic',
                            fontFamily: 'serif',
                            color: 'white'
                        }}
                    >
                        Show All
                    </Text>

                </TouchableOpacity>
            </View>

            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (

                <FlatList

                    contentContainerStyle={{
                        gap: 1,
                        marginTop: '3%',
                    }}
                    horizontal={true}
                    data={dataitems}
                    // data={sampledata}
                    renderItem={({ item, index }) => (
                        <>

                            <Horixontalcard


                                item={item} />
                        </>
                    )}

                />
            )}


        </SafeAreaView>
    )
}

export default Popular

const styles = StyleSheet.create({})