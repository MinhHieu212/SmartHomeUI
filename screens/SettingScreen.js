import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import Header from "../components/Header";

const SettingScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View className="flex-1 items-center">
      <Header name="Settings"></Header>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-blue-500 font-bold">Setting Screen</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Text className="font-bold text-white bg-blue-500 p-2 px-6 rounded-lg mt-3">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
