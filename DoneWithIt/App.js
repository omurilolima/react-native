import { View, StyleSheet, Alert, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Text, Image, Button, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'row', // main axis = row -> horizontal
          justifyContent: 'center', // align content along main axis, in this case horizontal
          alignItems: 'center', // align content along secondary axis, in this case vertical
        }}
      >
        <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
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
