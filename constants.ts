import Constants from 'expo-constants';
import * as yup from 'yup';

import { SetNumber } from './types';

const extra = Constants?.manifest?.extra;

export const REBRICKABLE_API_BASE_URL = extra?.rebrickableApiBaseUrl as string;
export const REBRICKABLE_API_KEY = extra?.rebrickableApiKey as string;
export const ALLOWED_LEGO_THEME_ID = extra?.allowedLegoThemeId as string;
export const MOCK_API_BASE_URL = extra?.mockApiBaseUrl as string;

// eslint-disable-next-line no-shadow
export enum QueryKey {
  Minifigs = 'minifigs',
  Minifig = 'minifig',
  Parts = 'parts',
}

export const routes = {
  choose: '/',
  personalDetails: '/personal-details',
  summary: '/summary',
} as const;

const MINIFIGS_PAGE_LIMIT = 5;

const keyParam = `?key=${REBRICKABLE_API_KEY}`;

export const rebrickableEndpoints = {
  minifigs: `minifigs${keyParam}&in_theme_id=${ALLOWED_LEGO_THEME_ID}&page_limit=${MINIFIGS_PAGE_LIMIT}`,
  minifig: (setNumber: SetNumber) => `minifigs/${setNumber}${keyParam}`,
  parts: (setNumber: SetNumber) => `minifigs/${setNumber}/parts${keyParam}`,
} as const;

export const mockApiEndpoints = {
  mockEndpoint: 'mock-endpoint',
};

const LETTERS_ONLY = /^[aA-zZ\s]+$/;
const FIVE_DIGIT = /^[0-9]{5}/;

export const personalDetailsSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  city: yup.string().matches(LETTERS_ONLY).required(),
  zipCode: yup.string().length(5).matches(FIVE_DIGIT).required(),
});
