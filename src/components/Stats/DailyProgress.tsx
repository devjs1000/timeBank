import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {totalSecondsInDay} from '../../constants/time';
import {ProcessType} from '../../states/process';
import {RootState} from '../../states/store';
import {LineChart} from 'react-native-chart-kit';
import {dark100, dark900, primary} from '../../constants/theme';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DailyProgress = () => {
  const timeData = useSelector((state: RootState) => state.history.data);
  const data: any = {};
  timeData.forEach((process: ProcessType) => {
    const date = new Date(process.startTime).getDate();
    const seconds = parseInt(process.time / 1000 + '');
    if (data[date]) {
      data[date] += seconds;
    } else {
      data[date] = seconds;
    }
  });

  const labels: string[] = Object.keys(data) || ['no data'];
  const values: number[] = Object.values(data) || [0];
  console.log({
    labels,
    values,
  });
  const width = Dimensions.get('window').width * Math.ceil(values.length / 6);
  return (
    <View>
      <Text style={styles.heading}>Daily Progress</Text>
      <ScrollView horizontal>
        {labels.length && values.length ? (
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: values,
                },
              ],
            }}
            width={width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="s"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: dark100,
              backgroundGradientFrom: dark100,
              backgroundGradientTo: dark900,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '3',
                strokeWidth: '1',
                stroke: primary,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default DailyProgress;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    textAlign: 'center',
  },
});
