import { useQuery } from '@tanstack/react-query';

import { getMinifig } from '../api';
import { QueryKey } from '../constants';
import { SetNumber } from '../types';

export const useMinifig = (setNumber: SetNumber) => {
  return useQuery([QueryKey.Minifig, setNumber], () => getMinifig(setNumber));
};
