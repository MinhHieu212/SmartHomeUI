import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const FanDeviceScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Living Room Fan"></Header>
      <ScrollView>
        <View className="flex-1 pb-10 px-3 mt-3 items-center justify-center h-[70vh]">
          <Text className="text-2xl font-bold text-blue-700">
            Fan Config Screen
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FanDeviceScreen;

const styles = StyleSheet.create({});
