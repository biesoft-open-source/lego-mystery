import { Box, Button, FlatList, Stack, Text } from 'native-base';
import React from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';

import { PartsDataResult } from '../api';
import {
  DataPageTemplate,
  MinifigPreview,
  PartsItem,
  Title,
} from '../components';
import { Root } from '../contexts';
import { useMinifig, useParts, useSubmit } from '../hooks';

const Summary = () => {
  const { send, context } = Root.useContext();

  const minifig = useMinifig(context.selectedMinifig!);
  const parts = useParts(context.selectedMinifig!);

  const { mutateAsync } = useSubmit();

  const resetForm = () => send({ type: 'CLEAR' });

  const handleSubmit = () => {
    mutateAsync({
      personalDetails: context.personalDetails!,
      selectedMinifig: context.selectedMinifig!,
    }).finally(() => resetForm());
  };

  const results = parts.data?.results;
  const minifigHasParts = results && results.length > 0;

  const renderItem: ListRenderItem<PartsDataResult> = ({ item: { part } }) => {
    return (
      <PartsItem
        name={part.name}
        partNum={part.part_num}
        imageSrc={part.part_img_url}
        key={part.part_num}
      />
    );
  };

  return (
    <Stack safeArea justifyContent="center" flex="1" bgColor="primary" p="6">
      <Stack space="6" bgColor="white" rounded="xl" flex="1" py="8">
        <Stack space="6" px="10">
          <Title invertColor>Summary</Title>

          <Box minH="40" justifyContent="center">
            <DataPageTemplate
              status={minifig.status}
              renderSuccess={() => (
                <MinifigPreview
                  imageSrc={minifig.data!.set_img_url}
                  name={minifig.data!.name}
                  imageSize="md"
                />
              )}
            />
          </Box>
        </Stack>

        <Stack space="5" flex="1" justifyContent="space-between">
          <Stack space="4" flex="1" justifyContent="space-between">
            {minifigHasParts && (
              <Text color="dark" px="10">
                There are {parts.data?.count} parts in this minifig:
              </Text>
            )}

            <FlatList
              data={results}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <Box h="3" />}
              style={minifigHasParts ? {} : styles.emptyList}
              contentContainerStyle={
                minifigHasParts
                  ? styles.contentContainer
                  : styles.emptyContentContainer
              }
              ListEmptyComponent={
                <DataPageTemplate
                  status={parts.status}
                  renderSuccess={() => (
                    <Text color="tertiary" textAlign="center">
                      Parts not found for selected minifig
                    </Text>
                  )}
                />
              }
            />
          </Stack>

          <Button onPress={handleSubmit} size="lg" px="16">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  emptyList: {
    flexGrow: 1,
  },
  emptyContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 40,
  },
});

export default Summary;
