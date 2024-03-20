import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center">
      <Header name="Home"></Header>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-blue-500 font-bold">Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
