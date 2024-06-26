import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import SettingStack from "./SettingStack";
import { VoiceScreen } from "../screens";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLOR } from "../constaints/Color";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        width: 75,
        height: 75,
        borderRadius: 50,
        shadowColor: COLOR.Blue,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.3,
        elevation: 10,
        shadowRadius: 12,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 5,
          right: 5,
          backgroundColor: "white",
          height: 65,
          borderRadius: 10,
        },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Voice"
        component={VoiceScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <View className="w-[60] h-[60] items-center justify-center bg-gray-200 rounded-full shadow-lg">
              <FontAwesome
                name="microphone"
                color={COLOR.Blue}
                size={size + 4}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppTab;
