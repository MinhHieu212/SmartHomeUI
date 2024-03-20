import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center  ">
      <Text className="text-2xl text-blue-500 font-bold">Welcome Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="font-bold text-white bg-blue-500 p-2 rounded-lg mt-3">
          Let's go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
