import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Example icon library
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

const IconGrid = ({onPressIcon}) => {
  const icons = [
    {name: 'fingerprint', color: Colors.white},
    {name: 'flight-takeoff', color: Colors.gray},
    {name: 'water-drop', color: Colors.gray},
    {name: 'health-and-safety', color: Colors.gray},
    {name: 'history-edu', color: Colors.gray},
    {name: 'card-membership', color: Colors.gray},
  ];

  return (
    <View style={Styles.iconGridContainer}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} onPress={() => onPressIcon(icon.name)}>
          <Icon name={icon.name} size={32} color={icon.color} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default IconGrid;
