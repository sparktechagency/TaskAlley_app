import { useState } from "react";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const ForgetPasswordFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "phone",
      type: FieldType.STRING,
      placeHolder: "Enter Phone Number",
      label: "Phone Number",
      error: false,
      value: "+8801566026301",
      required: true,
      keyboard: KeyboardType.NUMERIC,
    },
  ]);
  return { fields, setFields };
};

export default ForgetPasswordFields;
