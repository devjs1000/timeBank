import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Dialog,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../states/store';
import {closeModal, start} from '../states/process';
import {color1,  secondary} from '../constants/theme';

const ModalForm = () => {
  const [form, setForm] = useState<FormType>({
    title: '',
    description: '',
  });

  const {modalStatus} = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleChange = (name: string) => (value: string) => {
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleStartTask = () => {
    dispatch(
      start({
        ...form,
      }),
    );
    setForm({
      title: '',
      description: '',
    });
  };

  return (
    <Portal>
      <Dialog
        visible={modalStatus}
        onDismiss={handleModalClose}
        style={styles.container}>
        <Dialog.Title>
          <Text style={styles.heading}>Start Your Task</Text>
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.inputStyle}
            label="Title"
            value={form.title}
            onChangeText={handleChange('title')}
          />
          <TextInput
            style={styles.inputStyle}
            label="Description"
            value={form.description}
            onChangeText={handleChange('description')}
          />
          <Button
            mode="contained"
            style={{
              marginTop: 10,
            }}
            icon={'play'}
            onPress={handleStartTask}
            textColor={secondary}>
            Start
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

interface FormType {
  title: string;
  description: string;
}

export default ModalForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondary,
  },
  inputStyle: {
    backgroundColor: 'rgba(0,0,0,.1)',
    margin: 2,
  },
  heading: {
    color: color1 ,
  },
});
