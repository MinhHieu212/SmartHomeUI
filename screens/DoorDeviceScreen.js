import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { Picker } from "@react-native-picker/picker";

const DoorDeviceScreen = () => {
  const [notice, setNotice] = useState(false);
  const [selectedMinute, setSelectedMinute] = useState(20);
  const numbers = Array.from({ length: 60 }, (_, index) => {
    const unit = index > 1 ? " minutes" : " minute";
    return (index + 1).toString() + unit;
  });
  const [doorOpen, setDoorOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#EEF5FF] mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Front Door"></Header>
      <ScrollView>
        <View className="flex-row items-center justify-between rounded-2xl shadow-2x h-[50] bg-[#8AAEEF] mx-3 my-5 p-3">
          <Text className="text-lg font-bold text-[#2666DE]">Auto Mode</Text>
          <Switch
            trackColor={{ false: "#D4E2FD", true: "#2666DE" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setNotice(!notice)}
            value={notice}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
        {/* auto mode */}

        {/* auto mode control */}
        <View
          className={`m-3 ${!notice ? "opacity-50" : ""}`}
          pointerEvents={!notice ? "none" : "auto"}
        >
          <Text className="text-lg font-regular mx-2 my-1 text-[#6F7EA8]">
            Auto Mode Config
          </Text>
          <View className="flex-row items-center justify-between rounded-2xl shadow-2x h-[70] bg-white p-3">
            <Text className="text-lg font-regular">Close door after</Text>
            <View className="w-[50%] justify-center h-[40] border-2 rounded-xl border-[#2666DE] p-0 m-0">
              <Picker
                selectedValue={selectedMinute}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMinute(itemValue)
                }
                mode="dropdown"
                dropdownIconColor="#2666DE"
                dropdownIconRippleColor="#2666DE"
                itemStyle={{ color: "#2666DE" }}
              >
                {numbers.map((number) => (
                  <Picker.Item key={number} label={number} value={number} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* manual control */}

        <View
          className={`m-3 ${notice ? "opacity-50" : ""}`}
          pointerEvents={notice ? "none" : "auto"}
        >
          <Text className="text-lg font-regular mx-2 my-1 text-[#6F7EA8]">
            Manual Control
          </Text>
          <View className="flex-row items-center justify-between rounded-2xl shadow-2x h-[70] bg-white p-3">
            <View className="flex-row">
              <Image
                source={require("../assets/icon-park-solid_door-handle.png")}
                className="w-5 h-7"
              ></Image>
              <Text className="text-lg font-regular"> Open the door</Text>
            </View>
            <Switch
              trackColor={{ false: "#D4E2FD", true: "#2666DE" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setDoorOpen(!doorOpen)}
              value={doorOpen}
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoorDeviceScreen;

const styles = StyleSheet.create({});
