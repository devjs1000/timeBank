import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Portal, Dialog, Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {TimePicker} from 'react-native-paper-dates';
import {PossibleClockTypes} from 'react-native-paper-dates/lib/typescript/Time/timeUtils';

const EditHistoryForm = () => {
  const {showEditor, edit} = useSelector((state: RootState) => state.history);
  const handleCancelEdit = () => {

  };

  const handleSaveEdit = () => {

  };

  const handleTime = (time: any) => {
    console.log(time);
  };
  const handleFocus = (type: PossibleClockTypes) => {
    console.log('focus', type);
  };
  return (
    <Portal>
      <Dialog visible={showEditor} onDismiss={handleCancelEdit}>
        <Dialog.Title>Edit</Dialog.Title>
        <Dialog.Content>
          <TextInput label="Title" value={edit?.title} />
          <TextInput label="Description" value={edit?.description} />
          <View style={{marginVertical: 10}} />
          <TimePicker
            inputType={'keyboard'}
            focused={'hours'}
            hours={0}
            minutes={0}
            onFocusInput={handleFocus}
            onChange={handleTime}
            inputFontSize={26}
            use24HourClock={true}
          />
          <View style={{marginVertical: 10}} />

          <TextInput label="Duration" value={(edit?.time || '') + ''} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button  onPress={handleSaveEdit}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default EditHistoryForm;

const styles = StyleSheet.create({});
