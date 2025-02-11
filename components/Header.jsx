import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    let { user } = useUser()
    const [isOpen, setIsOpen] = useState(false);
    const [offset, setOffset] = useState(new Animated.Value(-200));
let navigation=useNavigation()
    const handlePress = () => {
        setIsOpen(!isOpen);
        Animated.timing(offset, {
            toValue: isOpen ? -200 : 0,
            duration: 300,
        }).start();
    };


    return (
        <SafeAreaView

            style={{
                padding: '3%',
                marginTop: '6%'
            }}
        >

            <View

                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <TouchableOpacity


                    onPress={handlePress}


                >





                    <Entypo name="menu" size={40} color="black" />
                </TouchableOpacity>

                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            top: 45,
                            left: 0,
                            width: '50%',
                            height: 100,


                        },
                        {
                            transform: [{ translateY: offset }],
                        },
                    ]}
                >
                    <TouchableOpacity style={{
                        backgroundColor: '', padding: 1, borderRadius: 1,
                        borderWidth: 1
                    }} onPress={() => navigation.navigate('ViewApplied')}>
                        <Text style={{
                            color: 'blue', fontSize: 15, textAlign: 'center', backgroundColor: 'white', fontStyle: 'italic', fontWeight: 900, fontFamily: 'serif',

                        }}>View Applied Job</Text>
                    </TouchableOpacity>
                </Animated.View>

                {user?.imageUrl ? (
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 10
                        }}
                    />
                ) : (
                    <FontAwesome name="user-circle-o" size={45} color="black" />
                )}

            </View>

            <View
                style={{
                    marginTop: '8%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',

                    width: '65%'
                }}
            >
                <Text

                    style={{
                        fontSize: 18,

                        fontWeight: 500,
                        fontFamily: 'mono',
                        fontStyle: 'italic',


                    }}
                >
                    Welcome ,

                </Text>
                <Text
                    style={{

                        fontWeight: 900,
                        fontStyle: 'italic',
                        fontFamily: 'serif',
                        fontSize: 20,

                    }}>
                    {user?.fullName}
                </Text>
            </View>

            <View

            >
                <Text

                    style={{
                        fontSize: 25,
                        fontWeight: 900,
                        fontFamily: 'serif',
                        marginTop: '2%',
                        padding: '1%'
                    }}

                >
                    Find Your Prefect Job
                </Text>
            </View>

        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})