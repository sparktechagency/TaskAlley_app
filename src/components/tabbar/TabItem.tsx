import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { TabIcons } from '../../constant/images';


const TabItem = ({
  route,
  label,
  isFocused,
}: {
  route: string;
  label: string;
  isFocused: boolean;
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopWidth: isFocused ? 3 : 0,
        borderColor: isFocused
          ? ""
          : 'transparent',
      }}>
      <Image
        source={TabIcons[label as keyof typeof TabIcons] as ImageSourcePropType}
        style={{
          width: 24,
          height: 24,
          tintColor: isFocused
            ? ""
            : "",
        }}
      />
    </View>
  );
};

export default TabItem

const styles = StyleSheet.create({})