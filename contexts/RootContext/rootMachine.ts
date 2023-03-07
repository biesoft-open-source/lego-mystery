import { assign, createMachine } from 'xstate';

import { PersonalDetailsFormData, SetNumber } from '../../types';

interface Context {
  selectedMinifig: SetNumber | null;
  personalDetails: PersonalDetailsFormData | null;
}

type Events =
  | {
      type: 'SUBMIT_MINIFIG';
      data: SetNumber;
    }
  | {
      type: 'SUBMIT_PERSONAL_DETAILS';
      data: PersonalDetailsFormData;
    }
  | {
      type: 'CLEAR';
    };

const initialContext = {
  personalDetails: null,
  selectedMinifig: null,
};

export const rootMachine = createMachine(
  {
    tsTypes: {} as import('./rootMachine.typegen').Typegen0,
    schema: {
      context: {} as Context,
      events: {} as Events,
    },
    predictableActionArguments: true,
    initial: 'chooseMinifig',
    context: initialContext,
    states: {
      chooseMinifig: {
        on: {
          SUBMIT_MINIFIG: {
            target: 'personalDetails',
            actions: ['goToPersonalDetails', 'assignMinifig'],
          },
        },
      },
      personalDetails: {
        on: {
          SUBMIT_PERSONAL_DETAILS: {
            target: 'summary',
            actions: ['goToSummary', 'assignPersonalDetails'],
          },
        },
      },
      summary: {
        on: {
          CLEAR: {
            target: 'chooseMinifig',
            actions: ['goToChooseMinifig', 'clearContext'],
          },
        },
      },
    },
  },
  {
    actions: {
      assignMinifig: assign({
        selectedMinifig: (_, event) => event.data,
      }),
      assignPersonalDetails: assign({
        personalDetails: (_, event) => event.data,
      }),
      clearContext: () => assign(initialContext),
    },
  }
);
