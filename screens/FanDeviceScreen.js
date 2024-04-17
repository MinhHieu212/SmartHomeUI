import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Switch,
  Image,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Feather from "react-native-vector-icons/Feather";
import ScheduleItem from "../components/ScheduleItem";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-virtualized-view";

const FanDeviceScreen = () => {
  const [notice, setNotice] = useState(false);
  const [openFan, setOpenFan] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [schedule, setSchedule] = useState([
    {
      key: 1,
      from: "10:00",
      to: "11:00",
      level: 1,
    },
    {
      key: 2,
      from: "10:00",
      to: "11:00",
      level: 1,
    },
    {
      key: 3,
      from: "10:00",
      to: "11:00",
      level: 1,
    },
  ]);

  const handleFrom = (key, value) => {
    setSchedule(
      schedule.map((item) =>
        item.key === key ? { ...item, from: value } : item
      )
    );
  };
  const handleTo = (key, value) => {
    setSchedule(
      schedule.map((item) => (item.key === key ? { ...item, to: value } : item))
    );
  };

  const handleLevel = (key, value) => {
    setSchedule(
      schedule.map((item) =>
        item.key === key ? { ...item, level: value } : item
      )
    );
  };

  const handleDelete = (key) => {
    setSchedule(schedule.filter((item) => item.key !== key));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#EEF5FF] mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Living Room Fan"></Header>

      <View className=" h-[50] flex-row-reverse items-center rounded-full mx-3">
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Feather name="info" className="text-[#2666DE]" size={26} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalOpen}
          onRequestClose={() => {
            setModalOpen(!modalOpen);
          }}
        >
          <View className="flex-1 bg-black/[0.5] items-center justify-end">
            <View className="bg-white rounded-t-2xl justify-center items-center p-3">
              <Text className="text-lg font-bold text-[#2666DE] mb-3">
                Fan Automation Mode
              </Text>
              <Text className="mb-10 text-lg text-center">
                The fan will automatically turn on when the temperature ishigher
                than 20°C.
              </Text>
              <View className="flex w-full items-center">
                <TouchableOpacity
                  className="bg-[#2666DE] w-full p-3 justify-center items-center rounded-lg "
                  onPress={() => setModalOpen(false)}
                >
                  <Text className=" w-[85vw] justify-center text-center text-lg font-bold text-white">Exit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View className="flex-row items-center justify-between rounded-2xl shadow-2x h-[50] bg-[#8AAEEF] mx-3 p-3">
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
      {/* manual control */}
      <View
        className={`m-3 ${notice ? "opacity-50" : ""}`}
        pointerEvents={notice ? "none" : "auto"}
      >
        <Text className="text-lg font-regular mx-2 my-1 text-[#6F7EA8]">
          Manual Control
        </Text>

        <View className="flex-row flex-wrap w-[100%] items-center justify-between rounded-2xl shadow-2x bg-white p-3">
          <View className="flex-row w-3/4">
            <Image
              source={require("../assets/Vector.png")}
              className="w-6 h-8"
            ></Image>
            <Text className="text-lg font-bold text-[#2666DE]">
              {" "}
              Turn on the device
            </Text>
          </View>
          <Switch
            className="w-1/4"
            trackColor={{ false: "#D4E2FD", true: "#2666DE" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setOpenFan(!openFan)}
            value={openFan}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
          <Slider
            className="w-[100%]"
            style={{ width: "100%", height: 40 }}
            minimumValue={1}
            maximumValue={3}
            minimumTrackTintColor="#2666DE"
            maximumTrackTintColor="#D4E2FD"
            thumbTintColor="#2666DE"
            step={1}
            disabled={!openFan}
          />
          <View className="flex-row w-[100%] justify-between">
            <Text className="text-lg font-regular text-[#2666DE]">Level 1</Text>
            <Text className="text-lg font-regular text-[#2666DE]">Level 3</Text>
          </View>
        </View>
      </View>

      {/* schedule */}

      <View className="m-3">
        <View className="flex-row items-center justify-between h-[50]">
          <Text className="text-lg font-regular mx-2 my-1 text-[#6F7EA8]">
            Schedule
          </Text>
          <TouchableOpacity
            className="w-1/4 items-end"
            onPress={() =>
              setSchedule([
                ...schedule,
                { key: Date.now(), from: "10:00", to: "11:00", level: 2 },
              ])
            }
          >
            <Feather name="plus" className="text-[#2666DE]" size={26}></Feather>
          </TouchableOpacity>
        </View>
        <View className="h-[40vh] pb-10 items-center justify-center">
          <ScrollView>
            <FlatList
              data={schedule}
              renderItem={({ item }) => (
                <ScheduleItem
                  item={item}
                  handleFrom={handleFrom}
                  handleTo={handleTo}
                  handleLevel={handleLevel}
                  handleDelete={handleDelete}
                />
              )}
              keyExtractor={(item) => item.key}
            ></FlatList>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FanDeviceScreen;

const styles = StyleSheet.create({});
