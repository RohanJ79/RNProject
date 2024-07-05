import React from 'react';
import {View, Alert, useWindowDimensions} from 'react-native';
import CircleWithGradient from '../components/CircleWithGradient';
import TipsRectangle from '../components/TipsRectangle';
import IconGrid from '../components/IconGrid';
import Card from '../components/Card';
import PlusCircle from '../components/PlusCircle';
import CustomText from '../components/CustomText';
import Colors from '../constants/Colors';

export default CreditCardScreen = props => {
  const handlePressIcon = iconName => {
    Alert.alert(`Pressed ${iconName} icon`);
    // Handle icon press logic here
  };

  const {height} = useWindowDimensions();
  return (
    <>
      <View
        style={{
          flex: height >= 852 ? 0.25 : 0.3,
          backgroundColor: Colors.dark,
          paddingTop: height >= 852 ? '15%' : '5%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <CircleWithGradient />
          </View>
          <View>
            <TipsRectangle />
          </View>
        </View>
        <CustomText
          style={{
            paddingTop: height >= 852 ? 70 : 60,
            fontSize: height >= 852 ? 28 : 24,
            fontWeight: 'bold',
          }}>
          All your credit cards
        </CustomText>
        <CustomText
          style={{
            paddingTop: height >= 852 ? 28 : 18,
            fontSize: height >= 852 ? 18 : 16,
          }}>
          Find all your credit cards here
        </CustomText>
      </View>
      <View
        style={{
          flex: height >= 852 ? 0.75 : 0.85,
          backgroundColor: Colors.darkGray,
        }}>
        <View>
          <IconGrid onPressIcon={handlePressIcon} />
        </View>
        <View>
          <Card />
        </View>
        <View
          style={{marginVertical: height >= 852 ? 430 : 370, marginLeft: 250}}>
          <PlusCircle />
        </View>
      </View>
    </>
  );
};
