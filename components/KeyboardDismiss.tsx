import { Pressable } from 'native-base';
import React from 'react';
import { Keyboard } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const KeyboardDismiss = ({ children }: Props) => {
  return (
    <Pressable onPress={Keyboard.dismiss} flex="1">
      {children}
    </Pressable>
  );
};
