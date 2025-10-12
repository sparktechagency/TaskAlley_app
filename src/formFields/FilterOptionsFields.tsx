import { useState } from 'react';
import { FieldsType, FieldType, KeyboardType } from '../types/Types';

const FilterOptionsFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "category",
      type: FieldType.SELECT,
      placeHolder: "Select Category",
      label: "Category",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
      options: [
        { label: "options 1", value: "options 1" },
        { label: "options 2", value: "options 2" },
        { label: "options 3", value: "options 3" }
      ]
    },
    // {
    //   name: "locations",
    //   type: FieldType.SELECT,
    //   placeHolder: "Select Locations",
    //   label: "Work location",
    //   error: false,
    //   value: "",
    //   required: true,
    //   keyboard: KeyboardType.DEFAULT,
    //   options: [
    //     { label: "options 1", value: "options 1" },
    //     { label: "options 2", value: "options 2" },
    //     { label: "options 3", value: "options 3" }
    //   ]
    // },
    // {
    //   name: "price",
    //   type: FieldType.SELECT,
    //   placeHolder: "Select Price Range",
    //   label: "Select Price Range",
    //   error: false,
    //   value: "",
    //   required: true,
    //   keyboard: KeyboardType.DEFAULT,
    //   options: [
    //     { label: "options 1", value: "options 1" },
    //     { label: "options 2", value: "options 2" },
    //     { label: "options 3", value: "options 3" }
    //   ]
    // },
    {
      name: "sort",
      type: FieldType.SELECT,
      placeHolder: "Sort By",
      label: "Sort By",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT,
      options: [
        { label: "Newest First", value: "Newest First" },
        { label: "Oldest First", value: "Oldest First" },
        { label: "Open for Bid", value: "Open for Bid" },
        { label: "Assigned", value: "Assigned" },
      ]
    },
  ]);
  return { fields, setFields };
};


export default FilterOptionsFields
