import { QueryStatus } from '@tanstack/react-query';
import { InferType } from 'yup';

import { personalDetailsSchema } from './constants';

export type FetchingStatus = QueryStatus;

export type SetNumber = string;

export type PersonalDetailsFormData = InferType<typeof personalDetailsSchema>;
