import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import { primary } from '../../constants/theme';

const ThemeButton = () => {
  const darkMode = true;
  const iconName = darkMode ? 'white-balance-sunny' : 'moon-last-quarter';
  return <IconButton iconColor={primary} icon={iconName} />;
};

export default ThemeButton;

const styles = StyleSheet.create({});
