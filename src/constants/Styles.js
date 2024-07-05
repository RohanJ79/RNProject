// Styles.js
import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window');
const Styles = StyleSheet.create({
  iconGridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: height >= 852 ? 38 : 24,
    width: '100%',
  },

  // Add more styles as needed
});

export default Styles;
