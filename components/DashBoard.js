import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";

const DashBoard = ({ data, name, unit }) => {
  return (
    <View className="m-2">
      <Text className="text-3xl font-bold my-5">{name}</Text>
      <View className="bg-white rounded-3xl flex-1 p-1 items-center w-full justify-center h-[25vh]">
        <LineChart
          areaChart
          data={data}
          width={350}
          height={150}
          hideDataPoints
          spacing={25}
          color="#2666DE"
          hideRules
          showVerticalLines
          thickness={2}
          startFillColor="#2666DE"
          endFillColor="rgba(38,102,222,0.5)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          maxValue={60}
          yAxisColor="#2666DE"
          curved
          yAxisThickness={0}
          yAxisLabelSuffix={unit}
          rulesType="solid"
          rulesColor="#2666DE"
          yAxisTextStyle={{ color: "#2666DE" }}
          yAxisSide="right"
          xAxisColor="#2666DE"
          xAxisLength={350}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: "#2666DE",
            pointerStripWidth: 2,
            pointerColor: "#2666DE",
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: "center",
                    marginTop: 30,
                    marginLeft: -40,
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: "white",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                      {items[0].value + unit}
                      {"\n"}
                      {items[0].time}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
