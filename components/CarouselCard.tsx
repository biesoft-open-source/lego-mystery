import { Stack, Button, Pressable } from 'native-base';

import { MinifigPreview } from './MinifigPreview';

interface Props {
  imageSrc: string;
  name: string;
  isSelected: boolean;
  onSelect: () => void;
  onShowDetails: () => void;
}

export const CarouselCard = ({
  imageSrc,
  name,
  isSelected,
  onSelect,
  onShowDetails,
}: Props) => {
  return (
    <Pressable onPress={onSelect} flex="1">
      <Stack
        rounded="xl"
        minH="100%"
        bgColor="white"
        justifyContent="center"
        p="8"
        borderWidth="8"
        borderColor={isSelected ? 'tertiary' : 'white'}
      >
        <MinifigPreview imageSrc={imageSrc} name={name} />

        <Button variant="link" onPress={onShowDetails} size="lg">
          Show details
        </Button>
      </Stack>
    </Pressable>
  );
};
