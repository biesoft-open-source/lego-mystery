import { Image } from 'expo-image';
import { Stack, Text } from 'native-base';
import React from 'react';

type ImageSize = 'lg' | 'md';

interface Props {
  imageSrc: string;
  imageSize?: ImageSize;
  name: string;
}

const IMAGE_SIZE: Record<ImageSize, number> = {
  lg: 180,
  md: 120,
};

export const MinifigPreview = ({ imageSrc, imageSize = 'lg', name }: Props) => {
  const imageWrapperSize = IMAGE_SIZE[imageSize];

  return (
    <Stack space="6" alignItems="center">
      <Image
        source={imageSrc}
        style={{ width: imageWrapperSize, height: imageWrapperSize }}
      />

      <Text variant="cardTitle" numberOfLines={1}>
        {name}
      </Text>
    </Stack>
  );
};
