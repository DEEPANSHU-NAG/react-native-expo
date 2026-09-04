import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4285f4' }} edges={['top']}>
      <StatusBar backgroundColor="#4285f4" style="light" />
      
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text className='text-5xl'>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}