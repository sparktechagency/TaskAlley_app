import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { otherIcons } from "../../../constant/images";

const SelectInput = () => {
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <Text>SelectInput</Text>
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
        }}
      >
        <Text>select</Text>
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
        snapPoints={["25%", "50%", "90%"]}
        ref={bottomSheetRef}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View></View>
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
