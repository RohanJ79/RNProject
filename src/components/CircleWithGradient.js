import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';

const CircleWithGradient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.blue, Colors.pink, Colors.warning]}
        locations={[0.0, 0.4, 0.98]}
        style={styles.circle}
      />
    </View>
  );
};
const height = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  circle: {
    width: height >= 852 ? 71 : 61,
    height: height >= 852 ? 71 : 61,
    borderRadius: height >= 852 ? 100 : 70,
  },
});

export default CircleWithGradient;
