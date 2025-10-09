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
          flexDirection: 'row', 
          justifyContent: 'center', 
          // When we enable flexWrap, alignItems will behave a bit differently
          alignItems: 'center', // determine alignment along each line
          alignContent: 'center', // determine alignment of lines of the entire container and only works when we have wrap enabled
          flexWrap: 'wrap',
        }}
      >
        <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300,
        }}/>
        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: 'orange',
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: 'greenyellow',
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
