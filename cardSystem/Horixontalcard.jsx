import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Horixontalcard = ({ item }) => {
  let navigation = useNavigation()
  return (
    <SafeAreaView

    >


      <TouchableOpacity style={styles.card}

        onPress={() => {
          navigation.navigate('SingleJob', { data: item })
        }}

      >
        <View style={styles.topRow}>
          <Image
            source={{ uri: item.employer_logo }}
            style={styles.logo}
            resizeMode="contain"
          />

        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.location}>
            {item.job_city}, {item.job_country}
          </Text>
        </View>
        {/* <View style={styles.bottomRow}>
        <Text style={{
          overflow:'visible'
        }}>
          {item.employer_name}
        </Text>
        <Text style={{
          overflow:'visible'
        }} numberOfLines={1}>
          {item.job_title}
        </Text>
      </View> */}
        <View style={styles.bottomRow}>
          <Text style={{
            overflow: 'visible',
            flex: 1
          }} numberOfLines={1} ellipsizeMode={'clip'}>
            {item.employer_name}
          </Text>
          <Text style={{
            overflow: 'visible',
            flex: 1
          }} numberOfLines={1} ellipsizeMode={'clip'}>
            {item.job_title}
          </Text>
        </View>

      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Horixontalcard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 9,
    margin: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: 180
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  logo: {
    width: 70,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
  },
  locationContainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  location: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  bottomRow: {
    marginTop: 8,
  },
  companyName: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    lineHeight: 0,

  },
});