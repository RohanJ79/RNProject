import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const TipsRectangle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Icon
          name="lightbulb-outline"
          size={20}
          color="#FAB60F"
          style={styles.icon}
        />
        <Text style={styles.text}>Tips</Text>
      </View>
    </View>
  );
};

const height = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: height >= 852 ? '40%' : '45%',
  },
  rectangle: {
    backgroundColor: Colors.darkGray,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    width: height >= 852 ? '55%' : '50%',
    height: 50,
    margin: 24,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica65-Medium',
  },
});

export default TipsRectangle;
