import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  s,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { CloseIcon } from "../assets/Icons";

const VoiceScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Voice AI"></Header>
      <ScrollView>
        <View className="flex-1 px-3 pb-10 h-[75vh] items-center mt-3 justify-center">
          <View className="absolute top-5 w-[90vw]bg-red-200">
            <ScrollView horizontal>
              <View className=" border-2 p-1 flex-row items-center rounded-2xl mx-3 border-blue-300">
                <Text className="font-semibold text-blue-400 ">
                  Turn on the light in the living room.
                </Text>
                <View className="ml-1">
                  <CloseIcon></CloseIcon>
                </View>
              </View>
              <View className="border-2 p-1 flex-row items-center rounded-2xl  border-blue-300">
                <Text className="font-semibold text-blue-400 ">
                  Turn on the light in the living room
                </Text>
                <View className="ml-1">
                  <CloseIcon></CloseIcon>
                </View>
              </View>
            </ScrollView>
          </View>

          <Image source={require("../assets/VoiceImage.png")}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({});
