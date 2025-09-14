import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const InputCheckbox = ({
  label = "check me",
  error = false,
  handler,
  value,
  name,
}: {
  label?: string;
  error?: boolean;
  handler?: (name: string) => void;
  value?: string;
  name?: string;
}) => {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 6,

    }}>
      <BouncyCheckbox
        size={20}
        fillColor="#115E59"
        unFillColor="#FFFFFF"
        isChecked={true}

        iconStyle={{
          borderColor: "#115E59",
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderWidth: 2,
          borderRadius: 0,
        }}
        text={label}
        textStyle={{
          textDecorationLine: "none"
        }}
        onPress={(isChecked: boolean) => {
          handler?.(name as string)
        }}
      />
    </View>
  )
}

export default InputCheckbox
