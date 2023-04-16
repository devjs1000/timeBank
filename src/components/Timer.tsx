import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {secondary, shadows} from '../constants/theme';
import Controllers from './Controllers';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {updateSecond} from '../states/process';
import {timeStampToTime, formatTime} from '../helpers/time';

const Timer = () => {
  const {hasStarted} = useSelector((state: RootState) => state.process);
  const {time} = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasStarted) {
        dispatch(updateSecond());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [hasStarted]);

  const {hr, min, sec} = timeStampToTime(time);

  return (
    <View style={styles.container}>
      {hasStarted && (
        <View style={styles.timer}>
          <Text variant="titleLarge" style={styles.timerText}>
            {formatTime(sec, min, hr)}
          </Text>
        </View>
      )}
      <Controllers />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondary,
    width: 220,
    height: 220,
    borderRadius: 50,
    position: 'relative',
    borderWidth: 4,
    borderColor: 'black',
    ...shadows,
  },

  timer: {
    marginVertical: 10,
  },
  timerText: {
    color: 'white',
  },
});
