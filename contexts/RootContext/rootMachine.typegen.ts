// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: object;
  missingImplementations: {
    actions: 'goToChooseMinifig' | 'goToPersonalDetails' | 'goToSummary';
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignMinifig: 'SUBMIT_MINIFIG';
    assignPersonalDetails: 'SUBMIT_PERSONAL_DETAILS';
    clearContext: 'CLEAR';
    goToChooseMinifig: 'CLEAR';
    goToPersonalDetails: 'SUBMIT_MINIFIG';
    goToSummary: 'SUBMIT_PERSONAL_DETAILS';
  };
  eventsCausingDelays: object;
  eventsCausingGuards: object;
  eventsCausingServices: object;
  matchesStates: 'chooseMinifig' | 'personalDetails' | 'summary';
  tags: never;
}
