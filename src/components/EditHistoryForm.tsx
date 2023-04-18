import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Portal, Dialog, Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {TimePicker} from 'react-native-paper-dates';
import {PossibleClockTypes} from 'react-native-paper-dates/lib/typescript/Time/timeUtils';
import {color2, dark900, primary, secondary} from '../constants/theme';
import {cancelEdit} from '../states/history';

const EditHistoryForm = () => {
  const {showEditor, edit} = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();
  const handleCancelEdit = () => {
    dispatch(cancelEdit());
  };

  const handleSaveEdit = () => {};

  const handleTime = (time: any) => {
    console.log(time);
  };
  const handleFocus = (type: PossibleClockTypes) => {
    console.log('focus', type);
  };
  return (
    <Portal>
      <Dialog
        visible={showEditor}
        onDismiss={handleCancelEdit}
        style={styles.container}>
        <Dialog.Title style={styles.heading}>Edit</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Title"
            value={edit?.title}
            style={styles.inputStyle}
          />
          <TextInput
            label="Description"
            value={edit?.description}
            style={styles.inputStyle}
          />
          {/* <View style={{marginVertical: 10}} />
          <TimePicker
            inputType={'keyboard'}
            focused={'hours'}
            hours={0}
            minutes={0}
            onFocusInput={handleFocus}
            onChange={handleTime}
            inputFontSize={26}
            use24HourClock={true}
          /> */}
          <View style={{marginVertical: 10}} />

          <TextInput
            inputMode="numeric"
            label="Duration"
            value={(edit?.time || '') + ''}
            style={styles.inputStyle}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            mode="contained"
            onPress={handleSaveEdit}
            style={styles.button}>
            Save
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default EditHistoryForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondary,
  },

  inputStyle: {
    backgroundColor: color2,
    color: 'white',
    margin: 2,
    borderRadius: 3,
  },
  heading: {
    color: primary,
  },
  button: {
    paddingHorizontal: 10,
  },
});
