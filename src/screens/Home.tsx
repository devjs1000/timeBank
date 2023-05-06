import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '../components/Timer';
import Discriptors from '../components/Discriptors';
import ModalForm from '../components/ModalForm';
import {ScrollView} from 'react-native-gesture-handler';
import {dark900} from '../constants/theme';
import TodayProcess from '../components/TodayProcess';

const Home = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Discriptors />
        <Timer />
        <ModalForm />
        <TodayProcess />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark900,
    height: '100%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  },
});
