import React from 'react';
import {
  Button,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {StyledInput} from './UIcompo/StyledInput';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .label('username')
    .min(2, 'Username must be at least 2 characters'),
  password: yup
    .string()
    .label('Password')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no longer than 16 characters')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      'at least 1 number or special char (@,!,#, etc).',
    )
    .required(),
});

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}>
      <ScrollView style={styles.containerStyle}>
        <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={(values, actions) => {
            alert('Something will happen when users click the login button');
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}>
          {formikProps => (
            <React.Fragment>
              <StyledInput
                formikProps={formikProps}
                formikKey="username"
                placeholder="username"
                autoFocus
              />

              <StyledInput
                formikProps={formikProps}
                formikKey="password"
                placeholder="password"
                secureTextEntry
              />

              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Button title="Submit" onPress={formikProps.handleSubmit} />
              )}
            </React.Fragment>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#91BCA4',
  },
  containerStyle: {
    marginTop: 350,
    padding: 30,
    backgroundColor: '#EAF4F4',
    maxHeight: 250,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default App;
