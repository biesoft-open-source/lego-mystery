import { Image } from 'expo-image';
import { Stack, Text } from 'native-base';

interface Props {
  imageSrc: string;
  name: string;
  partNum: string;
}

export const PartsItem = ({ imageSrc, name, partNum }: Props) => {
  return (
    <Stack direction="row" space="5" alignItems="center">
      <Image source={imageSrc} style={{ width: 60, height: 60 }} />

      <Stack flexShrink="1">
        <Text color="dark" numberOfLines={1}>
          {name}
        </Text>

        <Text color="tertiary">{partNum}</Text>
      </Stack>
    </Stack>
  );
};
