import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pageone from './components/Pageone';
import Pagetwo from './components/Pagetwo';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginVertical : 10 }}>
        <Button
          title="Info Voucher"
          onPress={() => navigation.navigate('Pageone')}
        />
      </View>
      <View style={{ marginVertical : 10 }}>
        <Button
          title="Oborlan"
          color="#841584"
          onPress={() => navigation.navigate('Pagetwo')}
        />
      </View>
      
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pageone" component={Pageone} options={{ title: 'Info Voucher' }} />
        <Stack.Screen name="Pagetwo" component={Pagetwo} options={{ title: 'Obrolan' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;