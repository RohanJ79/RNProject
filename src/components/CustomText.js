// TextComponent.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const CustomText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: 16,
    color: Colors.primary, // Default text color
    fontFamily: 'Helvetica65-Medium', // Default font family
    // Add more default styles as needed
  },
});

export default CustomText;
