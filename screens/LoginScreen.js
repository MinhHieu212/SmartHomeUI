import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  return (
    <View className="flex-1 justify-center items-center  ">
      <Text className="text-2xl text-blue-500 font-bold">Login Screen</Text>

      <TouchableOpacity onPress={() => login()}>
        <Text className="font-bold text-white bg-blue-500 p-2 px-6 rounded-lg mt-3">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
