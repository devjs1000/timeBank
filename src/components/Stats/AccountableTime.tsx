import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Badge, Button, List, ProgressBar} from 'react-native-paper';
import {totalSecondsInDay} from '../../constants/time';
import {useSelector} from 'react-redux';
import {RootState} from '../../states/store';
import {ProcessType} from '../../states/process';
import HistoryCard from '../HistoryCard';
import { primary } from '../../constants/theme';

const AccountableTime = () => {
  const timeData = useSelector((state: RootState) => state.history.data);
  const todayData = timeData.filter((data: ProcessType) => {
    const d1 = new Date(data.startTime);
    const d2 = new Date();
    return d1.toDateString() === d2.toDateString();
  });

  const accounted = todayData.reduce((acc: number, data: ProcessType) => {
    return acc + data.time;
  }, 0);
  const accountedSeconds = parseInt(accounted / 1000 + '');

  const value = (accountedSeconds * 100) / totalSecondsInDay / 100;
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Accordion
          titleStyle={styles.heading}
          style={styles.accordionHeading}
          title={`Accounted Time (${accountedSeconds})s`}
          left={props => <List.Icon {...props} icon="clock" />}>
          {todayData.map((data: ProcessType) => {
            return <HistoryCard data={data} />;
          })}
        </List.Accordion>
        <ProgressBar animatedValue={value} />
      </List.Section>
    </View>
  );
};

export default AccountableTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,.1)',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: primary,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  accordionHeading: {
    backgroundColor: '#000',
  },
});
