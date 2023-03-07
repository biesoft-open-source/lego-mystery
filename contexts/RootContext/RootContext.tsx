import { useActor, useInterpret } from '@xstate/react';
import { useRouter } from 'expo-router';
import React, { createContext, useContext } from 'react';
import { InterpreterFrom } from 'xstate';

// eslint-disable-next-line import/namespace
import { rootMachine } from './rootMachine';
import { routes } from '../../constants';

const RootMachineContext = createContext<InterpreterFrom<
  typeof rootMachine
> | null>(null);

interface Props {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: Props) => {
  const router = useRouter();

  const rootService = useInterpret(rootMachine, {
    actions: {
      goToChooseMinifig: () => router.replace(routes.choose),
      goToPersonalDetails: () => router.replace(routes.personalDetails),
      goToSummary: () => router.replace(routes.summary),
    },
  });

  return (
    <RootMachineContext.Provider value={rootService}>
      {children}
    </RootMachineContext.Provider>
  );
};

export const useRootContext = () => {
  const rootServices = useContext(RootMachineContext);

  if (!rootServices) {
    throw new Error('Missing context provider');
  }

  const [state, send] = useActor(rootServices);

  return { ...state, send };
};
