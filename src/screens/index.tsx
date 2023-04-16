import * as React from 'react';
import Home from './Home';
import History from './History';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primary, secondary} from '../constants/theme';
import Navbar from '../components/Navbar';
import useProcess from '../hooks/useProcess';

const Tab = createBottomTabNavigator();
const Screen = () => {
  useProcess();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        detachInactiveScreens={true}
        screenOptions={{
          header: ({route}) => <Navbar title={route.name} />,
          tabBarActiveTintColor: primary,
          tabBarInactiveTintColor: 'rgba(255,255,255,.2)',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: secondary,
            elevation: 9,
            borderTopWidth: 1,
            borderTopColor: 'black',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Screen;
