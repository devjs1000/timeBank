import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {primary} from '../../constants/theme';

const BuyMeACoffee = () => {
  const handlePress = () => {
    Linking.openURL('https://www.buymeacoffee.com/devjs1000');
  };
  return (
    <Button
      icon={'coffee'}
      style={styles.buttonStyle}
      mode="elevated"
      onPress={handlePress}
      textColor="white">
      Buy Me a coffee
    </Button>
  );
};

export default BuyMeACoffee;

const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,.1)',
    color: 'white',
    marginTop: 10,
  },
});
