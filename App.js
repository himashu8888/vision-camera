
import React from 'react';
import {Text,View,} from 'react-native';
import Appcamera from './Appcamera';
import Apphome from './Apphome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowImage from './ShowImage';
function App(){
  const Stack = createNativeStackNavigator();
  return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name='home' component={Apphome} options={{headerShown:false}}/>
 <Stack.Screen name='camera' component={Appcamera} options={{headerShown:false}}/>
 <Stack.Screen name='fullimage' component={ShowImage} options={{headerShown:false}}/>
 </Stack.Navigator>
 </NavigationContainer>
  )
}
export default App;
