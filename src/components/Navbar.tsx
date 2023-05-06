import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {dark900, secondary} from '../constants/theme';
import {getSeconds} from '../helpers/time';
import {totalSecondsInDay} from '../constants/time';

const Navbar = ({left}: NavbarProps) => {
  const [time, setTime] = React.useState(totalSecondsInDay);

  useEffect(() => {
    const interval = setInterval(() => {
      const usedSeconds = getSeconds();
      const availableSeconds = totalSecondsInDay - usedSeconds;
      setTime(availableSeconds);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {false ? left : <View />}
      <Button icon={'piggy-bank'} mode="contained" buttonColor={secondary}>
        {time == totalSecondsInDay ? '...' : time}
      </Button>
    </View>
  );
};

export default Navbar;

interface NavbarProps {
  left?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark900,
    padding: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  appName: {
    color: 'white',
  },
});
