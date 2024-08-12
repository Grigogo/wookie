/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View className="w-full h-20 bg-indigo-200">
          <Text>Hi</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
