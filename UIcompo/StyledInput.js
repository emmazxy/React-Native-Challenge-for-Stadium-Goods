import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputWrapper = ({children, formikProps, formikKey}) => (
  <View style={styles.containerStyle}>
    {children}
    <Text style={styles.textStyle}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

export const StyledInput = ({formikProps, formikKey, ...rest}) => {
  return (
    <InputWrapper formikProps={formikProps} formikKey={formikKey}>
      <TextInput
        style={
          formikProps.touched[formikKey] && formikProps.errors[formikKey]
            ? styles.inputStyles
            : styles.inputStylesRegular
        }
        autoCapitalize="none"
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </InputWrapper>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textStyle: {
    color: 'red',
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginBottom: 3,
  },
  inputStylesRegular: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
  },
});
