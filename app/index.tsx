import { Box, Button, Stack, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItem } from 'react-native-reanimated-carousel/lib/typescript/types';

import { MinifigData } from '../api';
import {
  CarouselCard,
  DataPageTemplate,
  Title,
  WebViewModal,
} from '../components';
import { Root } from '../contexts';
import { useMinifigs } from '../hooks';
import { SetNumber } from '../types';

const WINDOW_WIDTH = Dimensions.get('window').width;

const ChooseMinifig = () => {
  const [selectedMinifig, setSelectedMinifig] = useState<SetNumber>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();

  const { data, status } = useMinifigs();

  const { send } = Root.useContext();

  const handleChooseMinifig = () => {
    send({ type: 'SUBMIT_MINIFIG', data: selectedMinifig! });
  };

  const renderItem: CarouselRenderItem<MinifigData> = ({ item }) => {
    const isSelected = item.set_num === selectedMinifig;

    return (
      <CarouselCard
        name={item.name}
        imageSrc={item.set_img_url}
        isSelected={isSelected}
        onSelect={() =>
          setSelectedMinifig(isSelected ? undefined : item.set_num)
        }
        onShowDetails={() => setPreviewUrl(item.set_url)}
      />
    );
  };

  const results = data?.results;

  const hasMinifigs = results && results.length > 0;

  return (
    <>
      <Stack
        bgColor="primary"
        justifyContent="center"
        safeArea
        flex="1"
        space="10"
      >
        <Box>
          <Title>Choose Your Minifig</Title>

          <Box h={WINDOW_WIDTH} justifyContent="center">
            <DataPageTemplate
              status={status}
              renderSuccess={() =>
                hasMinifigs ? (
                  <Carousel
                    data={results}
                    renderItem={renderItem}
                    width={WINDOW_WIDTH}
                    height={WINDOW_WIDTH}
                    mode="parallax"
                  />
                ) : (
                  <Text color="tertiary" textAlign="center">
                    Minifigs Not Found
                  </Text>
                )
              }
            />
          </Box>
        </Box>

        <Button
          isDisabled={!selectedMinifig}
          onPress={handleChooseMinifig}
          size="lg"
          px="16"
        >
          Choose Figure
        </Button>
      </Stack>

      <WebViewModal
        previewUrl={previewUrl as string}
        onClose={() => setPreviewUrl(undefined)}
      />
    </>
  );
};

export default ChooseMinifig;
