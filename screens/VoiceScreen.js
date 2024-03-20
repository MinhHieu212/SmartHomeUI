import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const VoiceScreen = () => {
  return (
    <View className="flex-1 items-center  ">
      <Header name="Voice"></Header>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-blue-500 font-bold">Voice Screen</Text>
      </View>
    </View>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({});
