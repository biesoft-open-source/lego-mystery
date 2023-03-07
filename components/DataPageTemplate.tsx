import { Text } from 'native-base';

import { FetchingStatus } from '../types';

type Renderer = () => JSX.Element;

interface Props {
  status: FetchingStatus;
  renderLoading?: Renderer;
  renderSuccess: Renderer;
  renderError?: Renderer;
}

export const DataPageTemplate = ({
  renderLoading,
  renderSuccess,
  renderError,
  status,
}: Props) => {
  switch (status) {
    case 'loading': {
      return (
        renderLoading?.() ?? (
          <Text textAlign="center" color="tertiary">
            Loading...
          </Text>
        )
      );
    }

    case 'success':
      return renderSuccess();

    case 'error':
    default: {
      return (
        renderError?.() ?? (
          <Text textAlign="center" color="tertiary">
            An Error Ocurred
          </Text>
        )
      );
    }
  }
};
