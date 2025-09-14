import React from 'react';
import Input from '../components/ui/inputs/Input';
import InputCheckbox from '../components/ui/inputs/InputCheckbox';
import PasswordInput from '../components/ui/inputs/PasswordInput';
import { FieldsType, FieldType, KeyboardType } from '../types/Types';

export const RenderField = (field: FieldsType, setFields: React.Dispatch<React.SetStateAction<FieldsType[]>>) => {

  if (field.type == FieldType.CHECKBOX) {
    return (<InputCheckbox
      key={field.name}
      handler={(name, value) =>
        setFields((prev) =>
          prev.map((field) =>
            field.name === name ? { ...field, value } : field
          )
        )
      }
      label={field?.label}
      name={field?.name}
      value={field?.value as boolean}
    />)
  }

  if (field.type == FieldType.PASSWORD) {
    return (<PasswordInput
      key={field.name}
      handler={(name, value) =>
        setFields((prev) =>
          prev.map((field) =>
            field.name === name ? { ...field, value } : field
          )
        )
      }
      label={field?.label}
      name={field?.name}
      value={field?.value as string}
      keyboard={KeyboardType.DEFAULT}
    />)
  }

  if (field.type == FieldType.STRING) {
    return (<Input
      key={field.name}
      handler={(name, value) =>
        setFields((prev) =>
          prev.map((field) =>
            field.name === name ? { ...field, value } : field
          )
        )
      }
      label={field?.label}
      name={field?.name}
      value={field?.value as string}
      keyboard={field?.keyboard}
    />)
  }

}