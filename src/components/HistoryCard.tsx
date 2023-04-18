import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Badge, Button, Card, IconButton, Text} from 'react-native-paper';
import {ProcessType, start} from '../states/process';
import {formatTime, timeStampToTime} from '../helpers/time';
import {color2, secondary} from '../constants/theme';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteProcess, setEdit} from '../states/history';

const HistoryCard = ({data}: {data: ProcessType}) => {
  const duration = data.time;
  timeStampToTime(duration);
  const formattedDate = moment(data.startTime).format('DD/MM/YYYY');
  const formattedTime = moment(data.startTime).format('hh:mm');
  const dispatch = useDispatch();
  const handleUseTitleAndDescription = () => {
    dispatch(start({title: data.title, description: data.description}));
  };
  const handleDelete = () => {
    dispatch(deleteProcess(data.id));
  };

  const handleEdit = () => {
    dispatch(setEdit(data));
  };
  return (
    <Card style={styles.container}>
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
          <Text variant="bodyMedium" style={styles.description}>
            {data.description}
          </Text>
          <Badge style={[styles.time, styles.duration]}>
            {`${duration} s`}
          </Badge>
        </View>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon={'delete'}
          mode="contained-tonal"
          onPress={handleDelete}
        />
        <IconButton icon={'pen'} mode="contained-tonal" onPress={handleEdit} />
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
    backgroundColor: 'white',
  },
  time: {
    minWidth: 50,
    marginHorizontal: 2,
    paddingHorizontal: 10,
  },
  duration: {
    backgroundColor: color2,
  },
  formattedTime: {
    backgroundColor: secondary,
  },

  title: {
    flexGrow: 1,
    fontWeight: '900',
    // color:'white'
  },
  description: {
    // color:'white'
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
