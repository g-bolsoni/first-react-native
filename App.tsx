import { StyleSheet, Image, View } from 'react-native';

import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const isActive = false;

  return (
    <View style={styles.container}>
      <Image
        source={isActive ? symbolOn : symbolOff}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
