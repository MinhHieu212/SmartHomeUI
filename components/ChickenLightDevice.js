import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useDispatch } from "react-redux";
import { decreament, increament } from "../features/deviceSlice/deviceSlice";

const ChickenLightDevice = ({
  chickenLight = true,
  setChickenLight = () => {},
}) => {
  const dispatch = useDispatch();

  return (
    <View
      className={`w-[180] h-[180] rounded-2xl ${
        chickenLight ? "bg-[#3579F9] " : "bg-gray-200 "
      }  shadow-2xl justify-between p-5 shadow-blue-600`}
    >
      <View className="flex-row items-center justify-between h-[65%] pb-10">
        <View>
          <FontAwesome6
            name={"lightbulb"}
            color={chickenLight ? "white" : "#3579F9"}
            size={35}
          />
        </View>
        <View>
          <Switch
            trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              if (!chickenLight) {
                dispatch(increament());
              } else {
                dispatch(decreament());
              }
              setChickenLight(!chickenLight);
            }}
            value={chickenLight}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>

      <Text
        className={`text-white font-bold text-lg ${
          chickenLight ? "text-[white]" : "text-[#3579F9]"
        }`}
      >
        LRoom Light
      </Text>

      <View className="flex-row items-center justify-between">
        <Text
          className={`text-white font-bold text-md ${
            chickenLight ? "text-[white]" : "text-[#3579F9]"
          }`}
        >
          Philips
        </Text>
        {/* <AdjustmentIcon></AdjustmentIcon> */}
      </View>
    </View>
  );
};

export default ChickenLightDevice;

const styles = StyleSheet.create({});
