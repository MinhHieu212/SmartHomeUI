import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useDispatch } from "react-redux";
import { decreament, increament } from "../features/deviceSlice/deviceSlice";

const LRoomLightDevice = ({
  livingRoomLight = true,
  setLivingRoomLight = () => {},
}) => {
  const dispatch = useDispatch();
  return (
    <View
      className={`w-[180] h-[180] rounded-2xl ${
        livingRoomLight ? "bg-[#3579F9] " : "bg-gray-200 "
      }  shadow-2xl justify-between p-5 shadow-blue-600`}
    >
      <View className="flex-row items-center justify-between h-[65%] pb-10">
        <View>
          <FontAwesome6
            name={"lightbulb"}
            color={livingRoomLight ? "white" : "#3579F9"}
            size={35}
          />
        </View>
        <View>
          <Switch
            trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              if (!livingRoomLight) {
                dispatch(increament());
              } else {
                dispatch(decreament());
              }
              setLivingRoomLight(!livingRoomLight);
            }}
            value={livingRoomLight}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>

      <Text
        className={`text-white font-bold text-lg ${
          livingRoomLight ? "text-[white]" : "text-[#3579F9]"
        }`}
      >
        LRoom Light
      </Text>

      <View className="flex-row items-center justify-between">
        <Text
          className={`text-white font-bold text-md ${
            livingRoomLight ? "text-[white]" : "text-[#3579F9]"
          }`}
        >
          Philips
        </Text>
        {/* <AdjustmentIcon></AdjustmentIcon> */}
      </View>
    </View>
  );
};

export default LRoomLightDevice;

const styles = StyleSheet.create({});
