import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from "react";
import { ImageSourcePropType } from "react-native";
import { otherIcons } from "../../constant/images";
import { Navigation } from "../../utils/Navigate";
import FlexText from "../shered/FlexText";
import SearchBar from "../shered/SearchBar";
import CircleButton from "../ui/buttons/CircleButton";

const FilterOptions = ({ type }: { type: "Provider" | "Task" }) => {
  const navigation = Navigation();
  const navigate = useNavigation<DrawerNavigationProp<ParamListBase>>()
  return (
    <FlexText
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CircleButton
        style={{
          height: 45,
          width: 45,
          borderRadius: 30,
          marginTop: 10,
          backgroundColor: "#E6F4F1",
          borderColor: "#115E59",
          borderWidth: 1,
        }}
        imageSource={otherIcons.ArrowLeft as ImageSourcePropType}
        onPress={() => navigation.goBack()}
      />
      <SearchBar
        style={{
          width: "70%",
        }}
      />
      <CircleButton
        style={{
          height: 40,
          width: 40,
          borderRadius: 5,
          marginTop: 10,
          backgroundColor: "#E6F4F1",
          borderWidth: 1,
        }}
        imageSource={otherIcons.Filter as ImageSourcePropType}
        onPress={() => navigate.openDrawer()}
      />
    </FlexText>
  );
};

export default FilterOptions;

