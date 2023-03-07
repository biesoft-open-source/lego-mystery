// utility function from https://github.com/kolodny/react-compose-wrappers
import React from 'react';

type Wrapper = React.FC<React.PropsWithChildren<object>>;

export const composeWrappers = (wrappers: Wrapper[]): Wrapper => {
  return wrappers.reduceRight((Acc, Current): Wrapper => {
    return (props) =>
      React.createElement(
        Current,
        null,
        React.createElement(Acc, props as any)
      );
  });
};
