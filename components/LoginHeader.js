import { View, Image, Dimensions } from 'react-native';

export default function header() {
  const win = Dimensions.get('window');
  const ratio = win.width / 612;
  return (
    <View>
      <Image
        style={{ width: win.width, height: 497 * ratio }}
        source={require('../assets/LoginHeader.png')}
        resizeMode="contain"
      />
    </View>
  );
}
