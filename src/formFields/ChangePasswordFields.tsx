import { useState } from "react";
import { StyleSheet } from "react-native";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const ChangePasswordFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "password",
      type: FieldType.PASSWORD,
      placeHolder: "******",
      label: "Old Password",
      error: false,
      value: "123456",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "nPassword",
      type: FieldType.PASSWORD,
      placeHolder: "******",
      label: "New Password",
      error: false,
      value: "123456",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "cPassword",
      type: FieldType.PASSWORD,
      placeHolder: "******",
      label: "Confirm New password",
      error: false,
      value: "123456",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);
  return { fields, setFields };
};

export default ChangePasswordFields;

const styles = StyleSheet.create({});
