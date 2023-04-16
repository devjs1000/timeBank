import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Badge, Button, Card, IconButton, Text} from 'react-native-paper';
import {ProcessType, start} from '../states/process';
import {formatTime, timeStampToTime} from '../helpers/time';
import {secondary} from '../constants/theme';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteProcess} from '../states/history';

const HistoryCard = ({data}: {data: ProcessType}) => {
  const duration = data.time;
  const {sec, min, hr} = timeStampToTime(duration);
  const formattedDuration = formatTime(sec, min, hr);
  const formattedDate = moment(data.startTime).format('DD/MM/YYYY');
  const formattedTime = moment(data.startTime).format('hh:mm');
  const dispatch = useDispatch();
  const handleUseTitleAndDescription = () => {
    dispatch(start({title: data.title, description: data.description}));
  };
  const handleDelete = () => {
    dispatch(deleteProcess(data.id));
  };
  return (
    <Card style={styles.container}>
      <Card.Title title={data.id} />
      <Card.Content>
        <View style={styles.flexContainer}>
          <Text variant="titleLarge" style={styles.title}>
            {data.title}
          </Text>
          <Badge style={[styles.time, styles.formattedTime]}>
            {formattedDate}
          </Badge>
          <Badge style={[styles.time, styles.formattedTime]}>
            {formattedTime}
          </Badge>
        </View>
        <View style={styles.flexContainer}>
          <Text variant="bodyMedium">{data.description}</Text>
          <Badge style={[styles.time, styles.duration]}>
            {formattedDuration}
          </Badge>
        </View>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon={'delete'}
          mode="contained-tonal"
          onPress={handleDelete}
        />
        {/* <IconButton icon={'pen'} mode="contained-tonal" /> */}
        <Button
          icon={'play'}
          mode="contained-tonal"
          onPress={handleUseTitleAndDescription}>
          Use Title And Description
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  time: {
    minWidth: 50,
    marginHorizontal: 2,
    paddingHorizontal: 10,
  },
  duration: {
    backgroundColor: secondary,
  },
  formattedTime: {
    backgroundColor: secondary,
  },

  title: {
    flexGrow: 1,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
