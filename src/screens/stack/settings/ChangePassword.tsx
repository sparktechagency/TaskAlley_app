import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonBG from '../../../components/ui/buttons/ButtonBG';
import ChangePasswordFields from '../../../formFields/ChangePasswordFields';
import SafeAreaProvider from '../../../providers/SafeAreaProvider';
import { FieldsType } from '../../../types/Types';
import { RenderField } from '../../../utils/RenderField';

const ChangePassword = () => {
  const { fields, setFields } = ChangePasswordFields();
  return (
    <SafeAreaProvider
      backButtonText='Change Password'
    >
      {fields?.map((field: FieldsType) => RenderField(field, setFields))}
      <ButtonBG
        style={{
          marginTop: 10
        }}
        text="Update"
        handler={() => {

        }}
      />
    </SafeAreaProvider>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})