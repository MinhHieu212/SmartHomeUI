import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { getAllDivice } from "../apis/deviceAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  setDevicesInfomation,
  setlectAllDevicesInfomation,
} from "../features/deviceSlice/deviceSlice";
import DeviceItem from "../components/DeviceItem";
import { getSensorRecord } from "../apis/sensorAPI";

const senorRecord = {
  data: {
    _id: "660bbdca794602dd9c6dee0b",
    type: "temperature",
    value: 34.2,
    limit: 35,
    createdAt: "2024-04-02T08:11:54.882Z",
    updatedAt: "2024-04-02T08:11:54.882Z",
    __v: 0,
  },
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [doorStatus, setDoorStatus] = useState(false);
  const [fanStatus, setFanStatus] = useState(false);
  const [livingRoomLight, setLivingRoomLight] = useState(false);
  const [chickenLight, setChickenLight] = useState(false);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [light, setLight] = useState(500);
  const AllDevicesInfomation = useSelector(setlectAllDevicesInfomation);

  const handleGetAllDevices = async () => {
    try {
      const response = await getAllDivice();
      dispatch(setDevicesInfomation(response.data));

      const humidityRes = await getSensorRecord({
        type: "humidity",
        isAll: false,
      });
      setHumidity(humidityRes?.data?.value);

      const temperatureRes = await getSensorRecord({
        type: "temperature",
        isAll: false,
      });

      setTemperature(temperatureRes?.data?.value);
    } catch (e) {
      console.log(`error get all device ${e}`);
    }
  };

  useEffect(() => {
    handleGetAllDevices();

    const interval = setInterval(handleGetAllDevices, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFanStatus(AllDevicesInfomation[0]?.state);
    setDoorStatus(AllDevicesInfomation[1]?.state);
    setLivingRoomLight(AllDevicesInfomation[2]?.state);
    setChickenLight(AllDevicesInfomation[3]?.state);
  }, [AllDevicesInfomation]);

  // setInterval(handleGetAllDevices, 3000);
  // console.log("++++++++++++++ HOME SCREEN ++++++++++++++");

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
            <TouchableOpacity
              className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#f18759] rounded-2xl p-2"
              onPress={() => navigation.navigate("Dashboard")}
            >
              <View className="items-center justify-center h-[50%] ">
                <Ionicons name={"water-outline"} color={"white"} size={45} />
              </View>
              <Text className="font-bold text-md  text-white">Humidity</Text>
              <Text className="font-bold text-xl text-white">{humidity} %</Text>
            </TouchableOpacity>

            {/* Temperature */}
            <TouchableOpacity
              className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#874bff] rounded-2xl p-2"
              onPress={() => navigation.navigate("Dashboard")}
            >
              <View className="items-center justify-center h-[50%] ">
                <MaterialCommunityIcons
                  name={"coolant-temperature"}
                  color={"white"}
                  size={38}
                />
              </View>
              <Text className="font-bold text-md text-white">Temperature</Text>
              <Text className="font-bold text-xl text-white">
                {temperature} °C
              </Text>
            </TouchableOpacity>

            {/* Light */}
            <TouchableOpacity
              className="w-[31%] items-center justify-center shadow-2xl shadow-blue-600 h-[160] bg-[#F4C427] rounded-2xl p-2"
              onPress={() => navigation.navigate("Dashboard")}
            >
              <View className="items-center justify-center h-[50%] ">
                <Entypo name={"light-up"} color={"white"} size={45} />
              </View>
              <Text className="font-bold text-md text-white">Light </Text>
              <Text className="font-bold text-xl text-white">{light} lx</Text>
            </TouchableOpacity>
          </View>

          {/* Devices */}

          <Text className="text-xl font-bold mt-3">Devices</Text>
          <View className="flex-row flex-wrap justify-between items-center gap-2 gap-y-5 mt-1">
            {/* Door  */}
            <View className="w-[47%]">
              <DeviceItem
                device_obj={AllDevicesInfomation[3]}
                navigateDevices="DoorDevice"
                status={doorStatus}
                setStatus={setDoorStatus}
              ></DeviceItem>
            </View>
            {/* Fan  */}
            <View className="w-[47%]">
              <DeviceItem
                device_obj={AllDevicesInfomation[2]}
                navigateDevices="FanDevice"
                status={fanStatus}
                setStatus={setFanStatus}
              ></DeviceItem>
            </View>

            {/* Ligh 1 */}
            <View className="w-[47%]">
              <DeviceItem
                device_obj={AllDevicesInfomation[0]}
                navigateDevices=""
                status={livingRoomLight}
                setStatus={setLivingRoomLight}
              ></DeviceItem>
            </View>

            {/* Ligh 2 */}
            <View className="w-[47%]">
              <DeviceItem
                device_obj={AllDevicesInfomation[1]}
                navigateDevices=""
                status={chickenLight}
                setStatus={setChickenLight}
              ></DeviceItem>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
