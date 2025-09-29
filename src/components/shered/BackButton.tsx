import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType, StyleSheet, Text, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { otherIcons } from "../../constant/images";
import ScreenSize from '../../utils/ScreenSize';
import CircleButton from "../ui/buttons/CircleButton";

interface propType {
  text?: string;
  show?: boolean;
  imageSource?: ImageSourcePropType;
  handler?: () => void;
  style?: ViewStyle
}
const BackButton = ({ text, show = false, imageSource, handler, style }: propType) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = ScreenSize()
  const { top } = useSafeAreaInsets()
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        height: 45,
        position: "absolute",
        width: width - 40,
        left: 20,
        top: top,
        ...style
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
