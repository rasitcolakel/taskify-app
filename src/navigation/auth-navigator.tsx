import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

export type AuthStackParamList = {
  Onboarding: undefined;
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};
