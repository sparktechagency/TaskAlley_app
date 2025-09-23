import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TabButton from '../../components/mytask/TabButton';
import CreateReferral from '../../components/Refer/CreateReferral';
import ReferTable from '../../components/Refer/ReferTable';
import SafeAreaProvider from '../../providers/SafeAreaProvider';
const tab = ["My Discounts", "Referral Program"]
const ReferDiscounts = () => {
  const [active, setActive] = useState(tab[0])
  const elements = [
    <View style={{
      marginTop: 10
    }} key={1} />,
    <TabButton
      handler={(tab) => setActive(tab)}
      tab={tab} key={2} />,
    active === 'My Discounts' ?
      <ReferTable key={3} /> : <CreateReferral />
  ];
  return (
    <SafeAreaProvider
      backButtonText='Refer & Discounts'
    >
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({ item }) => item}
      />
    </SafeAreaProvider>
  )
}

export default ReferDiscounts

const styles = StyleSheet.create({})