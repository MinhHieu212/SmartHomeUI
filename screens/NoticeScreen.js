import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setName } from "../features/userInfo/userInfoSlice";
import { RightArrow } from "../assets/Icons";
import { useNavigation } from "@react-navigation/native";

const NoticeScreen = () => {
  const { logout } = useContext(AuthContext);

  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 mb-[70]">
      <Header name="Notice"></Header>
      <ScrollView>
        <View className="flex-1 pb-10 px-3">
          <Text className="text-xl font-bold mb-5">Account</Text>
          <Text className="text-2xl text-blue-500 font-bold">
            Notice Screen
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({});
