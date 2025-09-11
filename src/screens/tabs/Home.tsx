import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from '../../components/shered/BackButton';
import BlueBadgeOpacity30 from "../../components/ui/badges/BlueBadgeOpacity30";
import ButtonBG from "../../components/ui/buttons/ButtonBG";
import ButtonGreenOpacity30 from "../../components/ui/buttons/ButtonGreenOpacity30";
import ButtonTransparentBG from "../../components/ui/buttons/ButtonTransparentBG";
import IconButtonBG from "../../components/ui/buttons/IconButtonBG";
import IconButtonTransparent from "../../components/ui/buttons/IconButtonTransparent";
import Input from "../../components/ui/inputs/Input";
import PasswordInput from "../../components/ui/inputs/PasswordInput";
import SelectInput from "../../components/ui/inputs/SelectInput";

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  return (
    <ScrollView
      style={{
        marginTop: top,
        marginBottom: bottom,
        paddingHorizontal: 15,
        height,
      }}
    >
      <View
        style={{
          height,
        }}
      >
        <IconButtonBG handler={() => console.log("")} />
        <ButtonBG handler={() => console.log("")} />
        <ButtonTransparentBG handler={() => console.log("")} />
        <ButtonGreenOpacity30 handler={() => console.log("")} />
        <IconButtonTransparent handler={() => console.log("")} />
        <BlueBadgeOpacity30 />
        <Input type="default" />
        <PasswordInput type="default" />
        <SelectInput />
        <BackButton text='back button' />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
