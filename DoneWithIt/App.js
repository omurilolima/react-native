import { View, StyleSheet, Alert, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Text, Image, Button, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// install npm i @react-native-community/hooks
// change the app.json file to set the orientation to "default" to enable both orientations

export default function App() {
  const {landscape} = useDeviceOrientation(); // returns an object with landscape and portrait boolean values
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 1,
        }}
      >
        <View style={{
          backgroundColor: 'green',
          flex: 1,
        }}/>
        <View style={{
          backgroundColor: 'yellow',
          flex: 1,
        }}/>
        <View style={{
          backgroundColor: 'blue',
          flex: 1,
        }}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
