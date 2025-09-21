import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FlexText from '../../components/shered/FlexText';
import HeaderDesign from '../../components/shered/HeaderDesign';
import HeaderSecondary from '../../components/shered/HeaderSecondary';
import TextPrimary from '../../components/shered/TextPrimary';
import TextSecondary from '../../components/shered/TextSecondary';
import ButtonBG from '../../components/ui/buttons/ButtonBG';
import Divider from '../../components/ui/devider/Divider';
import ExtendDateFields from '../../formFields/ExtendDateFields';
import { handleExtendDate } from '../../handler/extendDate';
import SafeAreaProvider from '../../providers/SafeAreaProvider';
import { FieldsType } from '../../types/Types';
import Navigate from '../../utils/Navigate';
import { RenderField } from '../../utils/RenderField';

const ExtendDate = () => {
  const { height } = Dimensions.get("window");
  const { fields, setFields } = ExtendDateFields();
  const { top, bottom } = useSafeAreaInsets();
  const navigate = Navigate();
  return (
    <SafeAreaProvider
      backButtonText='Extension Request'
    >
      <View
        style={{
          flex: 1,
          gap: 6,
          justifyContent: "center",
          minHeight: height - top - bottom,
        }}
      >
        <HeaderDesign
          text='Request Change of Task Completion Date'
        />
        <TextSecondary text="Submit a request to update the agreed completion date." />

        {fields?.map((field: FieldsType) => RenderField(field, setFields))}

        <TouchableOpacity
          onPress={() => navigate("Forget")}
          style={[styles.forget]}
        >
          <TextSecondary
            style={{
              color: "#115E59",
            }}
            text=" Forget Password ?"
          />
        </TouchableOpacity>

        <FlexText
          style={{
            marginTop: 8,
          }}
        >
          <Divider
            style={{
              width: "45%",
            }}
          />
          <HeaderSecondary text="OR" />
          <Divider
            style={{
              width: "45%",
            }}
          />
        </FlexText>

        <FlexText
          style={{
            marginTop: 8,
            marginBottom: 6,
          }}
        >
          <TextPrimary text="Don’t have an account?" />
          <TouchableOpacity onPress={() => navigate("ChooseSignUp")}>
            <TextSecondary
              style={{
                color: "#115E59",
              }}
              text="Sign Up"
            />
          </TouchableOpacity>
        </FlexText>
        <ButtonBG
          text=""
          handler={() => {
            handleExtendDate(fields, setFields);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  forget: {
    marginLeft: "auto",
    marginTop: -24,
  },
});

export default ExtendDate
