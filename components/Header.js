import { View, Image, Dimensions } from 'react-native';

export default function Header({ source, imgWidth = 1, imgHeight = 1 }) {
  const win = Dimensions.get('window');
  return (
    <View>
      <Image
        style={{ width: win.width, height: (imgHeight * win.width) / imgWidth }}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
}
