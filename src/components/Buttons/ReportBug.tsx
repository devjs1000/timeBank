import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const ReportBug = () => {
  const handlePress = () => {
    Linking.openURL('https://github.com/devjs1000/timeBank/issues/new');
  };
  return (
    <Button
      icon={'bug'}
      style={styles.buttonStyle}
      mode="text"
      onPress={handlePress}
      textColor="white">
      Report Bugs
    </Button>
  );
};

export default ReportBug;

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,.1)',
    color: 'white',
    marginTop: 10,
  },
});
