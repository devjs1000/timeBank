import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {dark900, primary, secondary} from '../constants/theme';

const Navbar = ({title}: NavbarProps) => {
  const totalSecondsInDay = 60 * 60 * 24;

  const [time, setTime] = React.useState(totalSecondsInDay);
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hr = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      const usedSeconds = hr * 60 * 60 + min * 60 + sec;
      const availableSeconds = totalSecondsInDay - usedSeconds;
      setTime(availableSeconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Button icon={'piggy-bank'} mode="contained" buttonColor={secondary}>
        {time}
      </Button>
    </View>
  );
};

export default Navbar;

interface NavbarProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark900,
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  appName: {
    color: 'white',
  },
});
