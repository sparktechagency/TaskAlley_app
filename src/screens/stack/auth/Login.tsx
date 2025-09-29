import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FlexText from "../../../components/shered/FlexText";
import HeaderDesign from "../../../components/shered/HeaderDesign";
import HeaderSecondary from "../../../components/shered/HeaderSecondary";
import TextPrimary from "../../../components/shered/TextPrimary";
import TextSecondary from "../../../components/shered/TextSecondary";
import ButtonBG from "../../../components/ui/buttons/ButtonBG";
import Divider from "../../../components/ui/devider/Divider";
import LoginFields from "../../../formFields/LoginFields";
import { handleSignIn } from "../../../handler/signIn";
import { useGlobalContext } from "../../../providers/GlobalContextProvider";
import SafeAreaProvider from "../../../providers/SafeAreaProvider";
import { FieldsType } from "../../../types/Types";
import Navigate from "../../../utils/Navigate";
import { RenderField } from "../../../utils/RenderField";

const Login = () => {
  const { fields, setFields } = LoginFields();
  const { setRole } = useGlobalContext();
  const navigate = Navigate();
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: "center"
      }}
    >
      <HeaderDesign />
      <TextSecondary text="Log in with your credentials to access your account and manage everything from one place." />
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
        text=" Log In"
        handler={() => {
          handleSignIn(fields, setFields);
          const email = fields[0]?.value + "";
          setRole(email?.includes("user") ? "user" : "service");
          navigate("TabLayout");
        }}
      />
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  forget: {
    marginLeft: "auto",
    marginTop: -24,
  },
});
