import { useQuery } from '@tanstack/react-query';

import { getParts } from '../api';
import { QueryKey } from '../constants';
import { SetNumber } from '../types';

export const useParts = (setNumber: SetNumber) => {
  return useQuery([QueryKey.Parts, setNumber], () => getParts(setNumber));
};
