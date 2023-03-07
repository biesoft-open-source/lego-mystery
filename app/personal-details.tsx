import { yupResolver } from '@hookform/resolvers/yup';
import { Button, KeyboardAvoidingView, Stack } from 'native-base';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';

import { FormField, KeyboardDismiss, Title } from '../components';
import { personalDetailsSchema } from '../constants';
import { Root } from '../contexts';
import { PersonalDetailsFormData } from '../types';

interface Field {
  label: string;
  name: keyof PersonalDetailsFormData;
}

const fields: Field[] = [
  { label: 'Full Name', name: 'fullName' },
  { label: 'Email', name: 'email' },
  { label: 'Address', name: 'address' },
  { label: 'City', name: 'city' },
  { label: 'Zip Code', name: 'zipCode' },
];

const PersonalDetails = () => {
  const { control, formState, handleSubmit } = useForm<PersonalDetailsFormData>(
    // @ts-ignore
    {
      resolver: yupResolver(personalDetailsSchema),
      mode: 'onBlur',
    }
  );

  const { send } = Root.useContext();

  const onSubmit = (formData: PersonalDetailsFormData) => {
    send({ type: 'SUBMIT_PERSONAL_DETAILS', data: formData });
  };

  return (
    <KeyboardDismiss>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        flex="1"
      >
        <Stack
          safeArea
          justifyContent="center"
          flex="1"
          px="10"
          space="10"
          bgColor="primary"
        >
          <Stack space="6">
            <Title>Personal Details</Title>

            <Stack space="4">
              {fields.map((field) => (
                // @ts-ignore
                <FormField<PersonalDetailsFormData>
                  {...field}
                  control={control}
                  key={field.name}
                />
              ))}
            </Stack>
          </Stack>

          <Button
            isDisabled={!formState.isValid}
            onPress={handleSubmit(onSubmit)}
            size="lg"
            px="16"
          >
            View Summary
          </Button>
        </Stack>
      </KeyboardAvoidingView>
    </KeyboardDismiss>
  );
};

export default PersonalDetails;
