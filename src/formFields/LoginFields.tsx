import { useState } from 'react'
import { FieldsType, FieldType, KeyboardType } from '../types/Types'

const LoginFields = () => {
  const [fields, setFields] = useState<FieldsType[]>([
    {
      name: "email",
      type: FieldType.STRING,
      placeHolder: "siyamoffice0273@gmail.com",
      label: "Email Address",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.EMAIL_ADDRESS
    },
    {
      name: "password",
      type: FieldType.PASSWORD,
      placeHolder: "******",
      label: "Password",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT
    },
    {
      name: "remember",
      type: FieldType.CHECKBOX,
      placeHolder: "",
      label: "Remember me",
      error: false,
      value: "",
      required: true,
      keyboard: KeyboardType.DEFAULT
    }
  ])
  return { fields, setFields }
}

export default LoginFields
