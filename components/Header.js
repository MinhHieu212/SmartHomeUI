import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { setlectRunningDevicesCount } from "../features/deviceSlice/deviceSlice";

const Header = ({ name }) => {
  const navigation = useNavigation();
  const runningDevicesCount = useSelector(setlectRunningDevicesCount);
  return (
    <View className="w-full h-[11vh] bg-white shadow-lg pt-[1vh] shadow-blue-900  rounded-2xl items-center flex-row justify-between px-4">
      <View className="w-[50] h-[50] items-center justify-center rounded-full">
        <View className="w-[43] h-[43] rounded-full shadow-lg">
          <Image
            source={require("../assets/avatar.jpg")}
            resizeMode="cover"
            className="flex-1 w-full h-full rounded-full"
          ></Image>
        </View>
      </View>
      <View className="flex-col items-center">
        <Text className="text-xs text-[#6F7EA8] mt-1">
          {moment().format("LL")}
        </Text>
        <Text className="text-2xl font-bold">{name}</Text>
        <View className="flex-1 flex-row items-center mt-[-5] space-x-1">
          <View className="bg-[#1BE08D] w-3 h-3 rounded-full"></View>
          <Text className="text-sm text-[#07123C] ">
            {runningDevicesCount} device running
          </Text>
        </View>
      </View>

      <View className="w-[50] h-[50] items-center justify-center rounded-full">
        <TouchableOpacity onPress={() => navigation.navigate("Notice")}>
          <Feather name="bell" color={"black"} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
