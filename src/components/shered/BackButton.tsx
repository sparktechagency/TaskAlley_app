import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { otherIcons } from "../../constant/images";
import CircleButton from "../ui/buttons/CircleButton";

interface propType {
  text?: string;
  show?: boolean;
  imageSource?: ImageSourcePropType;
  handler?: () => void;
}
const BackButton = ({ text, show = false, imageSource, handler }: propType) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      <CircleButton
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          marginTop: 10,
          backgroundColor: "#E6F4F1",
          borderColor: "#115E59",
          borderWidth: 1,
        }}
        imageSource={otherIcons.ArrowLeft as ImageSourcePropType}
        onPress={() => navigation.goBack()}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
      {show ? (
        <CircleButton
          style={{
            height: 30,
            width: 30,
            borderRadius: 30,
            marginTop: 10,
            backgroundColor: "#E6F4F1",
            borderColor: "#115E59",
            borderWidth: 1,
          }}
          imageSource={
            imageSource
              ? imageSource
              : (otherIcons.Report as ImageSourcePropType)
          }
          onPress={() => handler?.()}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
