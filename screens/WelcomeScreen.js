import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/pic1 (3).jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-between my-14 items-center">
          <View>
            <Text className="text-3xl font-bold text-white mt-10 ml-10 w-[70vw]">
              Welcome back to the brilliance of your smart home!
            </Text>
          </View>
          <View>
            <View className="items-center justify-center mt-8">
              <TouchableOpacity
                className="w-[85vw] h-[55] bg-[#001A4B] shadow-lg shadow-slate-100 items-center justify-center rounded-xl"
                onPress={() => navigation.navigate("Login")}
              >
                <Text className="font-bold text-white text-lg">Login</Text>
              </TouchableOpacity>
            </View>
            <View className="items-center justify-center  mt-5">
              <TouchableOpacity
                className="w-[85vw] h-[55] bg-white items-center justify-center rounded-xl"
                onPress={() => navigation.navigate("Login")}
              >
                <Text className="font-bold  text-lg">Scan QR code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
