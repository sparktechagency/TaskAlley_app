import { useState } from "react";
import { FieldsType, FieldType, KeyboardType } from "../types/Types";

const PostTaskFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "title",
      type: FieldType.STRING,
      placeHolder: "Enter Task Title",
      label: "Task Title",
      error: false,
      value: "Title",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "task_category",
      type: FieldType.SELECT,
      placeHolder: "Select Task Category",
      label: "Task Category",
      error: false,
      value: "options 1",
      required: true,
      options: [
        { label: "options 1", value: "options 1" },
        { label: "options 2", value: "options 2" },
        { label: "options 3", value: "options 3" },
      ],
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "desc",
      type: FieldType.TEXTAREA,
      placeHolder:
        "Clearly explain what needs to be done, including details like location, required tools, and specific expectations.",
      label: " Enter Task Description",
      error: false,
      value: "options 1",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "type",
      type: FieldType.SELECT,
      placeHolder: "How should the task be done?",
      label: "How should the task be done?",
      error: false,
      value: "In-Person",
      required: true,
      options: [
        { label: "In-Person", value: "In-Person" },
        { label: "Online", value: "Online" },
      ],
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "place",
      type: FieldType.STRING,
      placeHolder: "Where to Go to Complete the Task",
      label: "Where to Go to Complete the Task",
      error: false,
      value: "e.g., 123 Allen Avenue, Ikeja, Lagos, 100001",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "flexible",
      type: FieldType.SELECT,
      placeHolder: "Where to Go to Complete the Task",
      label: "Where to Go to Complete the Task",
      error: false,
      value: "Fixed Date & Time",
      required: true,
      options: [
        { label: "Fixed Date & Time", value: "Fixed Date & Time" },
        { label: "Flexible", value: "Flexible" },
      ],
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "date",
      type: FieldType.DATE,
      placeHolder: "Preferred Date",
      label: "Preferred Date",
      error: false,
      value: "10-10-2025",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "time",
      type: FieldType.TIME,
      placeHolder: "Preferred Time",
      label: "Preferred Time",
      error: false,
      value: "10-10-2002",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
    {
      name: "offer",
      type: FieldType.STRING,
      placeHolder: "How much are you offering?",
      label: "How much are you offering?",
      error: false,
      value: "1000",
      required: true,
      keyboard: KeyboardType.NUMERIC,
    },
    {
      name: "confirm",
      type: FieldType.CHECKBOX,
      placeHolder: "",
      label:
        "I confirm this task complies with all platform rules and community guidelines. ",
      error: false,
      value: " ",
      required: true,
      keyboard: KeyboardType.DEFAULT,
    },
  ]);
  return { fields, setFields };
};

export default PostTaskFields;
