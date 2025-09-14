import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { otherIcons } from "../../../constant/images";
import HeaderSecondary from '../../shered/HeaderSecondary';

const SelectInput = ({
  value,
  placeHolder = "please select",
  style,
  options = [
    { label: "options 1 ", value: "options 1" },
    { label: "options 2 ", value: "options 2" },
  ],
  label = "select item",
  error = false,
  handler,
  name,
  required = true
}: {
  value?: string;
  placeHolder?: string;
  style?: StyleSheetProperties;
  options?: { label: string; value: string }[];
  label?: string;
  error?: boolean;
  handler?: (name: string, value: string) => void;
  name?: string;
  required: boolean
}) => {
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <HeaderSecondary
        style={{
          color: required ? error ? "red" : "#111827" : "#111827",
        }}
        text={label}
      />
      <TouchableOpacity
        onPress={() => bottomSheetRef.current?.snapToIndex(1)}
        style={{
          padding: 10,
          borderRadius: 6,
          backgroundColor: "#E6F4F1",
          paddingVertical: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...style,
        }}
      >
        <Text>{placeHolder}</Text>
        <Image source={otherIcons.arrowDown as ImageSourcePropType} />
      </TouchableOpacity>

      <BottomSheet
        onClose={handleClose}
        handleComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 6,
              paddingHorizontal: 10,
            }}
          >
            <View></View>
            <View
              style={{
                backgroundColor: "gray",
                padding: 3,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
            ></View>
            <TouchableOpacity onPress={handleClose}>
              <Image
                source={otherIcons.Close as ImageSourcePropType}
                style={styles.closeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        index={-1}
        snapPoints={["25%", "45%", "70%"]}
        ref={bottomSheetRef}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View
            style={{
              flex: 1,
              gap: 8,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {options?.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  bottomSheetRef?.current?.close();
                  handler?.(name as string, item?.value);
                }}
                style={{
                  padding: 6,
                  backgroundColor: item?.value == value ? "#C1E0DA" : "#E6F4F1",
                  width: "100%",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {item?.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  sheetContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    position: "relative",
  },

  closeIcon: {
    width: 15,
    height: 15,
    tintColor: "#000",
  },
});
