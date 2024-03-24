import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { LeftArrowIcon } from "../assets/Icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    const data = {
      userName: username,
      password: password,
    };

    console.log("data send for login", data);

    const token = "fake token from get api";
    // call login function -> change StackNavigation
    login(token);
  };

  return (
    <View className="flex-1 mt-10 items-center">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <TouchableOpacity
        className="absolute left-5"
        onPress={() => navigation.goBack()}
      >
        <LeftArrowIcon></LeftArrowIcon>
      </TouchableOpacity>
      <StatusBar barStyle={"opaque"}></StatusBar>

      <Text className="text-3xl font-bold text-black mt-14  mb-5 w-[80vw]">
        Welcome back! Glad to see you, Again!
      </Text>
      <View className="mt-10">
        <TextInput
          placeholder="Enter your account name"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
          className="w-[85vw] text-semibold text-[30] border-2 border-black rounded-lg p-3 mb-5"
        />
        <TextInput
          placeholder="Enter your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          className="w-[85vw] text-semibold text-[30] border-2 border-black p-3 rounded-lg"
        />
        <View className="mt-2">
          <Text className="text-right"> Forgot Password?</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleLogIn()}
          className="items-center justify-center"
        >
          <Text className="font-bold text-white bg-[#2666DE] text-center text-lg  p-4 w-[85vw]  px-6 rounded-xl mt-8">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
