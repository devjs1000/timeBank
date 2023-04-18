import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '../components/Timer';
import Discriptors from '../components/Discriptors';
import ModalForm from '../components/ModalForm';
import TodayProcess from '../components/TodayProcess';
import {ScrollView} from 'react-native-gesture-handler';
import {dark900} from '../constants/theme';

const Home = ({}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: dark900,
    height: '100%',
  },
});
