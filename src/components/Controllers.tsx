import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {openModal, stop} from '../states/process';
import {shadows} from '../constants/theme';

const Controllers = () => {
  const process = useSelector((state: RootState) => state.process);
  const {hasStarted} = process;
  const dispatch = useDispatch();
  const icon = hasStarted ? 'pause' : 'play';
  const title = hasStarted ? 'Stop' : 'Start';

  const handleTask = async () => {
    if (hasStarted) {
      dispatch(stop(process));
    } else {
      dispatch(openModal());
    }
  };

  return (
    <View>
      <Button
        icon={icon}
        mode="contained"
        onPress={handleTask}
        textColor="black"
        style={styles.button}>
        {title}
      </Button>
    </View>
  );
};

export default Controllers;

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderColor: 'black',
    ...shadows,
  },
});
