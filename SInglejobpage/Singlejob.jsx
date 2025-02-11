import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Share } from 'react-native';
import axios from   'axios'
import { useUser } from '@clerk/clerk-expo';
const Singlejob = () => {
    let { user } = useUser()

    let [about, setabout] = useState(true)
    let [QUALIFICATIONS, setQUALIFICATIONS] = useState(false)
    let [RESPONSIBILITIES, setRESPONSIBILITIES] = useState(false)
    let route = useRoute()
    let { data } = route.params
    console.log(data, 'singgle page ')
    let navigation = useNavigation()
    navigation.setOptions({ title: data?.employer_name });
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: data?.job_apply_link,
            });
            if (result.action === Share.sharedAction) {
                console.log('Shared');
            } else if (result.action === Share.dismissedAction) {
                console.log('Dismissed');
            }
        } catch (error) {
            console.error(error);
        }
    };



    async function savingitem(){

        await axios.post('http://192.168.1.42:3000/AppliedJobs', { data: data, email: user?.emailAddresses[0].emailAddress }).then((res) => {
            console.log(res.data, 'from single job fiel frontend ')
        }).catch((err) => {
            console.log(err, 'from from single job file ')
        })


    }
    return (
        <ScrollView


            style={{
                backgroundColor: 'white',
                width: '100%',
                height: '100%'
                ,
                margin: '2%'

            }}>


            <View

                style={{
                    marginTop: '13%'
                }}
            >


                <View

                    style={{
                        margin: 'auto',

                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={{ uri: data?.employer_logo }}
                        style={{
                            width: 150, height: 100
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            fontStyle: "italic",
                            fontWeight: 900,
                            fontFamily: 'serif'
                        }} heart
                    >
                        {data?.job_city},{data?.job_country}
                    </Text>
                </View>




                <View

                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: '8%'
                    }}
                >
                    <TouchableOpacity
                        //about

                        onPress={() => {
                            setQUALIFICATIONS(false)
                            setRESPONSIBILITIES(false)
                            setabout(true)
                        }}
                        style={{
                            marginRight: '3%',
                            padding: 9,
                            borderRadius: 10,
                            width: '23%',
                            borderWidth: about ? 2 : 0,
                            borderColor: about ? 'black' : '',
                            backgroundColor: about ? 'white' : '#404040',
                        }}

                    >
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontFamily: 'serif',
                                color: about ? 'black' : 'white',
                                fontSize: 12,
                                textAlign: 'center'

                            }}

                        >
                            ABout
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setabout(false)
                            setRESPONSIBILITIES(false)
                            setQUALIFICATIONS(true)
                        }}

                        // QUALIFICATIONS
                        style={{
                            marginRight: '3%',
                            borderWidth: QUALIFICATIONS ? 2 : 0,
                            borderColor: QUALIFICATIONS ? 'black' : '',
                            backgroundColor: QUALIFICATIONS ? 'white' : '#404040',
                            padding: 9,
                            borderRadius: 10,
                            width: '30%'
                        }} >
                        <Text

                            style={{
                                fontStyle: "italic",
                                fontFamily: 'serif',
                                color: QUALIFICATIONS ? 'black' : 'white',
                                fontSize: 10, textAlign: 'center'
                            }}>
                            QUALIFICATIONS
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity

                        onPress={() => {
                            setabout(false)
                            setQUALIFICATIONS(false)
                            setRESPONSIBILITIES(true)
                        }}

                        // RESPONSIBILITIES
                        style={{
                            marginRight: '3%',
                            borderWidth: RESPONSIBILITIES ? 2 : 0,
                            borderColor: RESPONSIBILITIES ? 'black' : '',
                            backgroundColor: RESPONSIBILITIES ? 'white' : '#404040',
                            padding: 9,
                            borderRadius: 10,
                            width: '33%'
                        }} >
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontFamily: 'serif',
                                color: RESPONSIBILITIES ? 'black' : 'white',
                                fontSize: 10, textAlign: 'center'
                            }}>
                            RESPONSIBILITIES
                        </Text>
                    </TouchableOpacity>
                </View>



                <View
                    style={{
                        marginTop: '5%',
                        flexDirection: 'row',
                        flexDirection: 'row-reverse',
                        gap: 20,
                        padding: '3%'
                    }}
                >
             
                    <TouchableOpacity onPress={() => onShare()}><Entypo name="share" size={30} color="black" /></TouchableOpacity>
                </View>


            </View>


            {/* <Text>
    {data?.job_description}
</Text> */}



            {about ? (

                <>


                    <Text
                        style={{
                            padding: '2%',
                            fontSize: 24,
                            fontFamily: 'serif',
                            fontWeight: 900,
                            fontStyle: 'italic'
                        }}
                    >About us.... </Text>

                    <Text
                        style={{
                            fontFamily: 'mono',
                            fontWeight: 900,
                            fontSize: 15,
                            padding: '3%',
                        }}
                    >Employment Type :
                        <Text

                            style={{
                                fontFamily: 'mono',
                                fontWeight: 100,
                                fontSize: 15,
                            }}>
                            {data?.job_employment_type}</Text>
                    </Text>
                    <Text
                        style={{
                            padding: '3%',
                            fontFamily: 'serif',
                            fontStyle: 'italic',
                            fontSize: 15
                        }}
                    >{data?.job_description}

                    </Text>

                </>
            ) : ('')}






            {/* {QUALIFICATIONS ? (<>
                <Text

                    style={{
                        padding: '2%',
                        fontSize: 22,
                        fontFamily: 'serif',
                        fontWeight: 900,
                        fontStyle: 'italic'
                    }}
                >

                    QUALIFICATIONS</Text>
                    {data?.Qualifications?.map((qualification, index) => (
      <Text
        key={index}
        style={{
          fontFamily: 'mono',
          fontWeight: 100,
          fontSize: 15,
          padding: '3%',
        }}
      >
        {qualification}
      </Text>
    ))}
            </>
            ) : ('')} */}
            {QUALIFICATIONS ? (
                <>
                    <Text
                        style={{
                            padding: '2%',
                            fontSize: 22,
                            fontFamily: 'serif',
                            fontWeight: 900,
                            fontStyle: 'italic'
                        }}
                    >
                        Job Highlights:
                    </Text>
                    {data?.job_highlights?.Benefits?.map((benefit, index) => (
                        <Text
                            key={index}
                            style={{
                                fontFamily: 'mono',
                                fontWeight: 100,
                                fontSize: 15,
                                padding: '3%',
                            }}
                        >
                            {benefit}
                        </Text>
                    ))}
                    <Text
                        style={{
                            padding: '2%',
                            fontSize: 22,
                            fontFamily: 'serif',
                            fontWeight: 900,
                            fontStyle: 'italic'
                        }}
                    >
                        Qualifications:
                    </Text>
                    {data?.job_highlights?.Qualifications?.map((qualification, index) => (
                        <Text
                            key={index}
                            style={{
                                fontFamily: 'mono',
                                fontWeight: 100,
                                fontSize: 15,
                                padding: '3%',
                            }}
                        >
                            {qualification}
                        </Text>
                    ))}
                </>
            ) : ('')}
            {RESPONSIBILITIES ? (<>
                <Text


                    style={{
                        padding: '2%',
                        fontSize: 22,
                        fontFamily: 'serif',
                        fontWeight: 900,
                        fontStyle: 'italic'
                    }}>
                    RESPONSIBILITIES
                </Text>

                {data?.job_highlights?.Responsibilities?.map((item, index) => (
                    <Text
                        style={{
                            padding: '3%'
                        }}
                    >
                        {item}
                    </Text>
                ))}


            </>) : ('')}

            <TouchableOpacity
                onPress={() => {

                    navigation.navigate('ApplyOptions', { data: data?.apply_options })
                }}

                style={{
                    backgroundColor: 'black',
                    padding: '4%',
                    margin: 'auto',
                    width: '33%',
                    borderRadius: 10,

                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'serif',
                        fontSize: 15,
                        fontWeight: 800
                    }}
                >
                    Apply Now
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Singlejob

const styles = StyleSheet.create({})