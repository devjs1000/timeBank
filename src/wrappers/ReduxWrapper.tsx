import React from 'react';
import {Provider} from 'react-redux';
import store from '../states/store';

const ReduxWrapper = ({children}: ReduxWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;

interface ReduxWrapperProps {
  children: React.ReactNode;
}
