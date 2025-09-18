import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ProviderCard from '../shered/ProviderCard'
const data = [
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  },
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  },
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  },
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  },
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  },
  {
    "title": "Help move a couch",
    "price": "₦24.00",
    "location_address": "Los Angeles CA 90024",
    "location_city": "New York, USA",
    "date": "15 May 2020 8:00 am",
    "user": {
      "name": "Marvin Fey",
      "status": "Open",
      "offers": "1 offered"
    },
    "image": ""
  }
]
const FilteredProvider = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProviderCard
          />
        )}
      />
    </View>
  )
}

export default FilteredProvider

const styles = StyleSheet.create({})