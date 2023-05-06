import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color2, dark900, primary} from '../constants/theme';
import {Divider, Drawer, List} from 'react-native-paper';
import BuyMeACoffee from '../components/Buttons/BuyMeACoffee';
import ReportBug from '../components/Buttons/ReportBug';
import AccountableTime from '../components/Stats/AccountableTime';
import DailyProgress from '../components/Stats/DailyProgress';

const Account = () => {
  return (
    <ScrollView style={styles.container}>
      <Divider style={styles.topBar} />
      <AccountableTime />
      <DailyProgress />
      <BuyMeACoffee />
      <ReportBug />
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark900,
    minHeight: '100%',
  },
  topBar: {
    marginVertical: 6,
    backgroundColor: primary,
  },
});
