import { StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableHighlight onPress={() => console.log('Image tapped!')}>
        <Image source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845894.png',
          width: 100,
          height: 100,
        }}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
