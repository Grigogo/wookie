import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigarion: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      {routes.map(route => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default Navigarion;
