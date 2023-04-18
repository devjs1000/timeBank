import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {ProcessType} from '../states/process';
import HistoryCard from './HistoryCard';
import { dark900 } from '../constants/theme';

const TodayProcess = () => {
  const {data: historyData} = useSelector((state: RootState) => state.history);
  const todayHistory = historyData.filter((item: ProcessType) => {
    const date = new Date(item.startTime);

    return new Date().toLocaleDateString() === date.toLocaleDateString();
  });

  return (
    <View style={styles.container}>
      {todayHistory.map((item: ProcessType) => {
        return <HistoryCard key={item.id} data={item} />;
      })}
    </View>
  );
};

export default TodayProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: 300,
    backgroundColor:dark900,
    marginTop: 20,
  },
});
