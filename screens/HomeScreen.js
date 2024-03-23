import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
} from "../features/userInfo/userInfoSlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AdjustmentIcon, DoorIcon, FanIcon } from "../assets/Icons";

const HomeScreen = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const [isEnabled, setIsEnabled] = useState(true);

  console.log("re-render Home Screen");
  return (
    <SafeAreaView className="flex-1 mb-[70]">
      <Header name="Home"></Header>
      <ScrollView>
        <View className="flex-1 px-3 pb-10">
          {/* Dashboard */}

          <Text className="text-xl font-bold">Dashboard</Text>

          {/* Humidity */}

          <View className="flex-row justify-between items-center gap-x-2 mt-3">
            <View className="w-[30%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-white rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <Ionicons name={"water-outline"} color={"#2666DE"} size={45} />
              </View>
              <Text className="font-bold text-md ">Humidity</Text>
              <Text className="font-bold text-xl text-blue-600">50 %</Text>
            </View>

            {/* Temperature */}

            <View className="w-[30%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-white rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <MaterialCommunityIcons
                  name={"coolant-temperature"}
                  color={"#2666DE"}
                  size={38}
                />
              </View>
              <Text className="font-bold text-md">Temperature</Text>
              <Text className="font-bold text-xl text-blue-600">26 oC</Text>
            </View>

            {/* Light */}

            <View className="w-[30%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-white rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <Entypo name={"light-up"} color={"#2666DE"} size={45} />
              </View>
              <Text className="font-bold text-md ">Light </Text>
              <Text className="font-bold text-xl text-blue-600">500 cd</Text>
            </View>
          </View>

          {/* Devices */}

          <Text className="text-xl font-bold mt-3">Devices</Text>
          <View className="flex-row flex-wrap justify-between items-center gap-2 gap-y-5 mt-3">
            {/* Door  */}

            <View className="w-[180] h-[180] rounded-2xl bg-[#3579F9] shadow-2xl justify-between p-5 shadow-blue-600">
              <View className="flex-row items-center justify-between h-[65%] pb-10">
                <View>
                  <DoorIcon></DoorIcon>
                </View>
                <View>
                  <Switch
                    trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  />
                </View>
              </View>

              <Text className="text-white font-bold text-lg">Front Door</Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-white font-bold text-md">Philips</Text>
                <AdjustmentIcon></AdjustmentIcon>
              </View>
            </View>

            {/* Fan */}

            <View className="w-[180] h-[180] rounded-2xl bg-[#3579F9] shadow-2xl justify-between p-5 shadow-blue-600">
              <View className="flex-row items-center justify-between h-[65%] pb-10">
                <View>
                  <FanIcon></FanIcon>
                </View>
                <View>
                  <Switch
                    trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  />
                </View>
              </View>

              <Text className="text-white font-bold text-lg">
                Living Room Fan
              </Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-white font-bold text-md">Philips</Text>
                <AdjustmentIcon></AdjustmentIcon>
              </View>
            </View>

            {/* Ligh 1 */}

            <View className="w-[180] h-[180] rounded-2xl bg-[#3579F9] shadow-2xl justify-between p-5 shadow-blue-600">
              <View className="flex-row items-center justify-between h-[65%] pb-10">
                <View>
                  <FontAwesome6 name={"lightbulb"} color={"white"} size={35} />
                </View>
                <View>
                  <Switch
                    trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  />
                </View>
              </View>

              <Text className="text-white font-bold text-lg">LRoom Light</Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-white font-bold text-md">Philips</Text>
                {/* <AdjustmentIcon></AdjustmentIcon> */}
              </View>
            </View>

            {/* Ligh 2 */}

            <View className="w-[180] h-[180] rounded-2xl bg-[#3579F9] shadow-2xl justify-between p-5 shadow-blue-600">
              <View className="flex-row items-center justify-between h-[65%] pb-10">
                <View>
                  <FontAwesome6 name={"lightbulb"} color={"white"} size={35} />
                </View>
                <View>
                  <Switch
                    trackColor={{ false: "#669BF7", true: "#D4E2FD" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  />
                </View>
              </View>

              <Text className="text-white font-bold text-lg">
                Kitchen Light
              </Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-white font-bold text-md">Philips</Text>
                {/* <AdjustmentIcon></AdjustmentIcon> */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
