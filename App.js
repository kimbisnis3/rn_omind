import * as React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pageone from './components/Pageone';
import Pagetwo from './components/Pagetwo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

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
        <Stack.Screen name="Pagetwo" component={Pagetwo} options={{ 
          title: 'Obrolan',
          headerRight: () => (
            <View style={{ marginHorizontal : 10, marginVertical: 18 }}>
              <FlatList
              keyExtractor={(item,index)=>index.toString()}
              data={[1,2]}
              horizontal
              renderItem={({ item, index }) => (
                <View style={{ marginHorizontal : 10 }}>
                  <FontAwesomeIcon icon={ index == 0 ? faSearch : faEllipsisV } color="black" size={18} />
                </View>
              )}
              />
            </View>
          ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;