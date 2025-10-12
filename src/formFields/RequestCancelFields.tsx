import { useState } from "react";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const RequestCancelFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "reason",
      type: FieldType.SELECT,
      placeHolder: "Select Reason",
      label: "Reason for Cancellation",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
      options: [
        {
          label: "National Identification Number (NIN)",
          value: "National Identification Number (NIN)",
        },
        { label: "Voter’s Card", value: "Voter’s Card" },
        { label: "International Passport", value: "I nternational Passport" },
        { label: "Driver’s License", value: "Driver’s License" },
      ],
    },
    {
      name: "desc",
      type: FieldType.STRING,
      placeHolder: "Provide additional details if needed",
      label: "Description (Optional)",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);
  return { fields, setFields };
};

export default RequestCancelFields;
