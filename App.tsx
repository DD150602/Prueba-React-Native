import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Presentation/views/home/home';
import RegisterScreen from './src/Presentation/views/register/Register';
import ProfileInfoScreen from './src/Presentation/views/profile/info/ProfileInfo';


export type RootStackParamList = {
  HomeScreen:undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined
}

const Stack = createNativeStackNavigator <RootStackParamList>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Registro',
            headerShown:true
          }}
        />
        <Stack.Screen
            name="ProfileInfoScreen"
            component={ProfileInfoScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

