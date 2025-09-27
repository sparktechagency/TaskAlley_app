import { useState } from "react";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const profileUpdateFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "name",
      type: FieldType.STRING,
      placeHolder: "Enter Full Name",
      label: "Full Name",
      error: false,
      value: "shaharulsiyam",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "email",
      type: FieldType.STRING,
      placeHolder: "Enter Email Address",
      label: "Email Address",
      error: false,
      value: "gmail@.com",
      required: true,
      keyboard: KeyboardType.EMAIL_ADDRESS,
    },
    {
      name: "phone",
      type: FieldType.STRING,
      placeHolder: "Enter Phone Number",
      label: "Phone Number",
      error: false,
      value: "3554521",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "location",
      type: FieldType.STRING,
      placeHolder: "Enter location",
      label: "location",
      error: false,
      value: "bogra bangladesh",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);
  return { fields, setFields };
};

export default profileUpdateFields;
