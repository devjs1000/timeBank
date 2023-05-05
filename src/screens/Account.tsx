import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color2, dark900, primary} from '../constants/theme';
import {Divider, Drawer, List} from 'react-native-paper';
import BuyMeACoffee from '../components/Buttons/BuyMeACoffee';
import ReportBug from '../components/Buttons/ReportBug';

const Account = () => {
  return (
    <ScrollView style={styles.container}>
      <Divider style={styles.topBar} />
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
