import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {color1, color2} from '../constants/theme';
import {useSelector} from 'react-redux';
import {RootState} from '../states/store';

const Discriptors = () => {
  const {title, description} = useSelector((state: RootState) => state.process);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Discriptors;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 0,
    height: 200,
    justifyContent: 'center',
  },
  title: {
    color: color2,
    paddingHorizontal: 4,
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    color: color1,
    paddingHorizontal: 4,
    fontSize: 40,
    width: 300,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
});
