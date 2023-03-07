import { Text } from 'native-base';
import React from 'react';

interface Props {
  children: string;
  invertColor?: boolean;
}

export const Title = ({ children, invertColor }: Props) => {
  return (
    <Text variant="screenTitle" color={invertColor ? 'dark' : 'white'}>
      {children}
    </Text>
  );
};
