import { useQuery } from '@tanstack/react-query';

import { getMinifigs } from '../api';
import { QueryKey } from '../constants';

export const useMinifigs = () => {
  return useQuery([QueryKey.Minifigs], getMinifigs);
};
