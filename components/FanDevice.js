import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AdjustmentIcon, FanIcon } from "../assets/Icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { decreament, increament } from "../features/deviceSlice/deviceSlice";

const FanDevice = ({ fanStatus = false, setFanStatus = () => {} }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      className={`w-[180] h-[180] rounded-2xl ${
        fanStatus ? "bg-[#3579F9] " : "bg-gray-200 "
      }  shadow-2xl justify-between p-5 shadow-blue-600`}
    >
      <View className="flex-row items-center justify-between h-[65%] pb-10">
        <View>
          <FanIcon color={fanStatus ? "white" : "#3579F9"} />
        </View>
        <View>
          <Switch
            trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              if (!fanStatus) {
                dispatch(increament());
              } else {
                dispatch(decreament());
              }
              setFanStatus(!fanStatus);
            }}
            value={fanStatus}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>

      <Text
        className={`text-white font-bold text-lg ${
          fanStatus ? "text-[white]" : "text-[#3579F9]"
        }`}
      >
        Living Room Fan
      </Text>

      <View className="flex-row items-center justify-between">
        <Text
          className={`text-white font-bold text-md ${
            fanStatus ? "text-[white]" : "text-[#3579F9]"
          }`}
        >
          Philips
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("FanDevice")}>
          <AdjustmentIcon
            color={fanStatus ? "white" : "#3579F9"}
          ></AdjustmentIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FanDevice;

const styles = StyleSheet.create({});
