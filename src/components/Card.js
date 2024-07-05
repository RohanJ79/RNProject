import React, {useState} from 'react';
import {View, StyleSheet, Image, FlatList, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import Colors from '../constants/Colors';

function Item({index, perfomSwipe, color, length, ccimage}) {
  var offsetX = useSharedValue(0);
  var offsetY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onChange(event => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize(event => {
      if (
        Math.abs(event.translationX) > 120 ||
        Math.abs(event.translationY) > 120
      ) {
        runOnJS(perfomSwipe)();
      }
      offsetX.value = withTiming(0);
      offsetY.value = withTiming(0);
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offsetX.value},
        {translateY: offsetY.value},
        {
          scaleX: withTiming(
            Math.max(
              1 - (length - index - 1) / 10 + 0.05 * (length - index - 1),
              0.8,
            ),
          ),
        },
        {translateY: withTiming(Math.min((length - index - 1) * 5, 10))},
      ],

      zIndex: index,
      backgroundColor: color,
    };
  });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <FlatList
            data={ccimage}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({item}) => (
              <Image source={item.source} style={styles.image} />
            )}
          />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default function Card() {
  const [data, setData] = useState([
    {
      id: 1,
      source: require('../../assets/images/card_6.png'),
      color: Colors.cyan,
    },
    {
      id: 2,
      source: require('../../assets/images/card_9.png'),
      color: Colors.lightGreen,
    },
    {
      id: 3,
      source: require('../../assets/images/card_17.png'),
      color: Colors.orange,
    },
    {
      id: 4,
      source: require('../../assets/images/card_130.png'),
      color: Colors.lightBlue,
    },
    {
      id: 5,
      source: require('../../assets/images/card_132.png'),
      color: Colors.purple,
    },
  ]);

  function perfomSwipe() {
    setData(oldData => {
      let lastElement = oldData.pop();
      oldData.unshift(lastElement);
      return [...oldData];
    });
  }

  return (
    <View>
      <View style={styles.parent}>
        {data.map((item, index) => {
          return (
            <Item
              key={item.id}
              index={index}
              perfomSwipe={perfomSwipe}
              color={item.color}
              length={data.length}
              ccimage={data}
            />
          );
        })}
      </View>
    </View>
  );
}
const height = Dimensions.get('window');
var styles = StyleSheet.create({
  box: {
    width: 350,
    height: 250,
    borderWidth: 0.1,
    borderColor: Colors.white,
    borderRadius: 20,
    marginTop: height >= 852 ? 70 : 40,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 20,
    borderWidth: 0.5,
    marginRight: 10,
    resizeMode: 'stretch',
  },
  parent: {
    alignItems: 'center',
  },
});
