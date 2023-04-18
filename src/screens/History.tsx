import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {dark900, secondary} from '../constants/theme';
import {useSelector} from 'react-redux';
import {RootState} from '../states/store';
import HistoryCard from '../components/HistoryCard';

const History = () => {
  const {data} = useSelector((state: RootState) => state.history);

  return (
    <ScrollView style={styles.container}>
      {[...data]?.reverse()?.map((item, index) => {
        return <HistoryCard key={index} data={item} />;
      })}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark900,
    minHeight: '100%',
  },
});
