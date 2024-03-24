import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { CloseIcon } from "../assets/Icons";

const VoiceScreen = () => {
  return (
    <SafeAreaView className="flex-1 mb-[70]">
      <Header name="Voice AI"></Header>
      <ScrollView>
        <View className="flex-1 px-3 pb-10 h-[80vh] items-center  justify-center">
          <View className="mb-20 absolute top-5 border-2 p-2 flex-row items-center rounded-2xl border-blue-300">
            <Text className="font-semibold text-blue-400">
              Turn on the light in the living room
            </Text>
            <View className="ml-1">
              <CloseIcon></CloseIcon>
            </View>
          </View>
          <Image source={require("../assets/VoiceImage.png")}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({});
