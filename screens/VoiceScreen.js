import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { CloseIcon } from "../assets/Icons";
import Voice from "@react-native-voice/voice";
import { requestPermission } from "react-native-android-voice";
import { request, PERMISSIONS } from "react-native-permissions";

const requestMicrophonePermission = async () => {
  try {
    const granted = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
    if (granted === "granted") {
      // Permission granted, you can start the speech recognition
      console.log("Microphone permission granted");
    } else {
      // Permission denied
      console.log("Microphone permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const VoiceScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    Voice.onSpeechError = (err) => setError(err.error);
    Voice.onSpeechResults = (res) => setResult(res.value[0]);
    Voice.onSpeechStart = () => console.log("start Speech");
    Voice.onSpeechEnd = () => setIsRecording(false);

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecording = async () => {
    try {
      await requestMicrophonePermission();
      await Voice.start("en-US");
      setIsRecording(true);
    } catch (err) {
      setError(err.message);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white mb-[70]">
      <StatusBar barStyle={"opaque"}></StatusBar>
      <Header name="Voice AI"></Header>
      <ScrollView>
        <View className="flex-1 px-3 pb-10 h-[75vh] items-center mt-3 justify-center">
          <View className="absolute top-5 w-[90vw] bg-red-200">
            <ScrollView horizontal>
              <View className=" border-2 p-1 flex-row items-center rounded-2xl mx-3 border-blue-300">
                <Text className="font-semibold text-blue-400 ">
                  Turn on the light in the living room.
                </Text>
                <View className="ml-1">
                  <CloseIcon></CloseIcon>
                </View>
              </View>
              <View className="border-2 p-1 flex-row items-center rounded-2xl border-blue-300">
                <Text className="font-semibold text-blue-400 ">
                  Turn on the light in the living room
                </Text>
                <View className="ml-1">
                  <CloseIcon></CloseIcon>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => (isRecording ? stopRecording() : startRecording())}
          >
            <Text className="text-2xl">
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Text>
          </TouchableOpacity>
          <View className="t-4 flex items-center justify-center">
            <Text className="text-lg text-blue-300">{result}</Text>
            <Text className="text-lg text-red-500">{error}</Text>
          </View>
          {/* <Image source={require("../assets/VoiceImage.png")}></Image> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({});
