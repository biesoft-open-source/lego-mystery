import axios from 'axios';

import { REBRICKABLE_API_BASE_URL, MOCK_API_BASE_URL } from '../constants';

const rebrickableAxiosInstance = axios.create({
  baseURL: REBRICKABLE_API_BASE_URL,
});

const mockAxiosInstance = axios.create({
  baseURL: MOCK_API_BASE_URL,
});

export { rebrickableAxiosInstance, mockAxiosInstance };
