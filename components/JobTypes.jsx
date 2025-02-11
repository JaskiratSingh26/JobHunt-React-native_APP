import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const JobTypes = () => {
    let navigation = useNavigation()

    let types = [
        'Full-Time',
        "Part-Time",
        "Contract-Base",
        "Freelance",
        "Internship",
        "Volunteer",

    ]
    return (
        <SafeAreaView
            style={{
                marginTop: '5%',
                width: '100%',

            }}>
            <FlatList


                data={types}
                horizontal={true}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item, index }) => (

                    <TouchableOpacity

                        onPress={() => {
                            console.log(item, 'seding to the item screen')

                            navigation.navigate('itemScreen', {jobtype:item})
                        }}>
                        <View
                            style={{
                                backgroundColor: '#404040',
                                width: '70%',
                                padding: '4%',
                                width: 150,
                                height: 30,

                                borderRadius: 10
                            }}

                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    fontFamily: 'serif',
                                    color: 'white'
                                }}

                            >

                                {item}
                            </Text>
                        </View>


                    </TouchableOpacity>
                )}


            />
        </SafeAreaView>
    )
}

export default JobTypes

const styles = StyleSheet.create({})