import { mockAxiosInstance } from '../config';
import { mockApiEndpoints } from '../constants';
import { PersonalDetailsFormData, SetNumber } from '../types';

interface MockSubmitBody {
  personalDetails: PersonalDetailsFormData;
  selectedMinifig: SetNumber;
}

export const mockSubmit = async (body: MockSubmitBody) => {
  const { data } = await mockAxiosInstance.post<MockSubmitBody>(
    mockApiEndpoints.mockEndpoint,
    body
  );

  return data;
};
