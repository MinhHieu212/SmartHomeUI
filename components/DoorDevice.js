import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AdjustmentIcon, DoorIcon } from "../assets/Icons";
import { useNavigation } from "@react-navigation/native";
import { decreament, increament } from "../features/deviceSlice/deviceSlice";
import { useDispatch } from "react-redux";

const DoorDevice = ({ doorStatus = false, setDoorStatus = () => {} }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      className={`w-[180] h-[180] rounded-2xl ${
        doorStatus ? "bg-[#3579F9]" : "bg-gray-200"
      } shadow-2xl justify-between p-5 shadow-blue-600`}
    >
      <View className="flex-row items-center justify-between h-[65%] pb-10">
        <View>
          <DoorIcon color={doorStatus ? "white" : "#3579F9"}></DoorIcon>
        </View>
        <View>
          <Switch
            trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={async () => {
              if (!doorStatus) {
                dispatch(increament());
              } else {
                dispatch(decreament());
              }
              setDoorStatus(!doorStatus);
            }}
            value={doorStatus}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>

      <Text
        className={`text-white font-bold text-lg ${
          doorStatus ? "text-[white]" : "text-[#3579F9]"
        }`}
      >
        Front Door
      </Text>

      <View className="flex-row items-center justify-between">
        <Text
          className={`text-white font-bold text-md ${
            doorStatus ? "text-[white]" : "text-[#3579F9]"
          }`}
        >
          Philips
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("DoorDevice")}>
          <AdjustmentIcon
            color={doorStatus ? "white" : "#3579F9"}
          ></AdjustmentIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoorDevice;

const styles = StyleSheet.create({});
