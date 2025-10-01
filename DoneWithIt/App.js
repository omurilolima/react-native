import { StyleSheet, Alert, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Text, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click me" 
        color="#841584"
        onPress={() => Alert.alert('My title', 'My message', [
          {text: 'Yes', onPress: () => console.log('Yes')},
          {text: 'No', onPress: () => console.log('No')}
        ])} 
      />
    </SafeAreaView>
  );
}

// It is a good practice to define styles outside of the component
// to avoid re-creating the styles on each render
// Also, it is a good practice to use StyleSheet.create to create styles
// because it provides better performance and better error checking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
