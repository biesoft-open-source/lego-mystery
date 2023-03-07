import { useMutation } from '@tanstack/react-query';

import { mockSubmit } from '../api';

export const useSubmit = () => {
  return useMutation(mockSubmit);
};
