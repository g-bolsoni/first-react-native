import { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity style={isActive ? styles.containerOn : styles.containerOff} onPress={() => setIsActive(!isActive)}>
      <View >
        <Image
          source={isActive ? symbolOn : symbolOff}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#6a6a6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
