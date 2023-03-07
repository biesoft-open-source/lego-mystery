import { Stack, Button } from 'native-base';
import React from 'react';
import { Modal } from 'react-native';
import WebView from 'react-native-webview';

interface Props {
  previewUrl: string;
  onClose: () => void;
}

export const WebViewModal = ({ previewUrl, onClose }: Props) => {
  return (
    <Modal visible={!!previewUrl} animationType="slide">
      <Stack safeArea space="4" flex="1" bgColor="primary" pb="4">
        <WebView source={{ uri: previewUrl }} />

        <Button onPress={onClose} size="lg" px="16">
          Close
        </Button>
      </Stack>
    </Modal>
  );
};
