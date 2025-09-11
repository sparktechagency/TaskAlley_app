import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import SafeAreaProvider from '../../providers/SafeAreaProvider';

const Home = () => {
  const { height } = Dimensions.get("window");

  return (
    <SafeAreaProvider
      backButtonText='test'
    >
      <ScrollView
        style={{

        }}
      >
        <View>
          <Text>
            asdasd
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
