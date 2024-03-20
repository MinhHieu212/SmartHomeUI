import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLOR } from "../constaints/Color";

const Header = ({ name }) => {
  return (
    <View
      className="w-full h-[13vh] absolute bg-white pt-[4vh] rounded-2xl  items-center flex-row justify-between px-4 mb-3"
      style={{
        shadowColor: COLOR.Blue,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowRadius: 10,
      }}
    >
      <View className="w-[50] h-[50] items-center justify-center  rounded-full">
        <View className="w-[35] h-[35] rounded-full">
          <Image
            source={require("../assets/favicon.png")}
            resizeMode="contain"
            style={{ flex: 1 }}
          ></Image>
        </View>
      </View>
      <Text className="text-xl font-bold">{name}</Text>
      <View className="w-[50] h-[50] items-center justify-center rounded-full">
        <Feather name="bell" color={"black"} size={26} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
