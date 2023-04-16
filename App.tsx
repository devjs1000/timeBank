import * as React from 'react';
import PaperWrapper from './src/wrappers/PaperWrapper';
import Screen from './src/screens';
import ReduxWrapper from './src/wrappers/ReduxWrapper';
import {StatusBar} from 'react-native';
import EditHistoryForm from './src/components/EditHistoryForm';
import useAsyncMount from './src/hooks/useAsyncMount';
import {initializedb} from './src/helpers/db';
export default function App() {
  useAsyncMount(async () => {
    const dbStatus = await initializedb();
    console.log('dbStatus', dbStatus);
  });
  return (
    <PaperWrapper>
      <ReduxWrapper>
        <StatusBar backgroundColor={'black'} />
        <EditHistoryForm />
        <Screen />
      </ReduxWrapper>
    </PaperWrapper>
  );
}
