import React from "react";
import { Image, ImageSourcePropType, View, ViewStyle } from "react-native";
import { otherIcons } from "../../../constant/images";

const BlueBadgeOpacity30 = ({
  style,
  icon,
  component,
}: {
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  component?: any;
}) => {
  return (
    <View
      style={{
        backgroundColor: "#E6F4F1",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 40,
        ...style,
      }}
    >
      {component ? (
        component
      ) : (
        <Image
          source={icon ? icon : (otherIcons.manCircle as ImageSourcePropType)}
          style={{
            height: 24,
            width: 24,
            tintColor: "#115E59",
          }}
        />
      )}
    </View>
  );
};

export default BlueBadgeOpacity30;
