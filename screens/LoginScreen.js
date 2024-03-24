import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  return (
    <View className="flex-1 my-14 items-center">
      <Text className="text-3xl font-bold text-black mt-10 ml-10 mb-10 w-[90vw]">
        Welcome back! Glad to see you, Again!
      </Text>
      <View className="mt-20">
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
          className="w-[85vw]   text-semibold  border-2 border-black rounded-lg p-4 mb-5 "
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          className="w-[85vw] text-semibold  border-2 border-black p-4 rounded-lg"
        />
        <TouchableOpacity
          onPress={() => login()}
          className="items-center justify-center"
        >
          <Text className="font-bold text-white bg-blue-500 text-center  p-4  w-[85vw]  px-6 rounded-lg mt-10">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
