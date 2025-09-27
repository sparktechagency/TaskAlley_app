import { useState } from "react";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const ExtendDateFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "date",
      type: FieldType.DATE,
      placeHolder: "Select Date",
      label: "New Proposed Date",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "time",
      type: FieldType.TIME,
      placeHolder: "Select Time",
      label: "New Proposed Time",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "reason",
      type: FieldType.TEXTAREA,
      placeHolder: "Write Reason for Request",
      label: "Reason for Request",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);
  return { fields, setFields };
};

export default ExtendDateFields;
