import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import FanDevice from "../components/FanDevice";
import DoorDevice from "../components/DoorDevice";
import LRoomLightDevice from "../components/LRoomLightDevice";
import ChickenLightDevice from "../components/ChickenLightDevice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [doorStatus, setDoorStatus] = useState(true);
  const [fanStatus, setFanStatus] = useState(false);
  const [livingRoomLight, setLivingRoomLight] = useState(false);
  const [chickenLight, setChickenLight] = useState(false);

  console.log("re-render Home Screen");
  return (
    <SafeAreaView className="flex-1 bg-white mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Home"></Header>
      <ScrollView>
        <View className="flex-1 px-3 mt-3 pb-10 ">
          {/* Dashboard */}

          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold">Dashboard</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
              <Text className="text-md mr-2 text-blue-500 font-semibold">
                Details
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-center gap-x-2 mt-3">
            {/* Humidity */}

            <View className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#EF732E] rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <Ionicons name={"water-outline"} color={"white"} size={45} />
              </View>
              <Text className="font-bold text-md  text-white">Humidity</Text>
              <Text className="font-bold text-xl text-white">50 %</Text>
            </View>

            {/* Temperature */}

            <View className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#2E36EF] rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <MaterialCommunityIcons
                  name={"coolant-temperature"}
                  color={"white"}
                  size={38}
                />
              </View>
              <Text className="font-bold text-md text-white">Temperature</Text>
              <Text className="font-bold text-xl text-white">26 oC</Text>
            </View>

            {/* Light */}

            <View className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#4BD158] rounded-2xl p-2">
              <View className="items-center justify-center h-[50%] ">
                <Entypo name={"light-up"} color={"white"} size={45} />
              </View>
              <Text className="font-bold text-md text-white">Light </Text>
              <Text className="font-bold text-xl text-white">500 cd</Text>
            </View>
          </View>

          {/* Devices */}

          <Text className="text-xl font-bold mt-3">Devices</Text>
          <View className="flex-row flex-wrap justify-between items-center gap-2 gap-y-5 mt-1">
            {/* Door  */}
            <View>
              <DoorDevice
                doorStatus={doorStatus}
                setDoorStatus={setDoorStatus}
              ></DoorDevice>
            </View>
            {/* Fan  */}
            <View>
              <FanDevice
                fanStatus={fanStatus}
                setFanStatus={setFanStatus}
              ></FanDevice>
            </View>

            {/* Ligh 1 */}
            <View>
              <LRoomLightDevice
                livingRoomLight={livingRoomLight}
                setLivingRoomLight={setLivingRoomLight}
              ></LRoomLightDevice>
            </View>

            {/* Ligh 2 */}
            <View>
              <ChickenLightDevice
                chickenLight={chickenLight}
                setChickenLight={setChickenLight}
              ></ChickenLightDevice>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
