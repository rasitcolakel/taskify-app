import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import GetStarted from '@src/screens/no-auth/onboarding/GetStarted';
import OnboardingSteps from '@src/screens/no-auth/onboarding/OnboardingSteps';
import { OnboardingStackParamList } from '@src/types/navigation';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnboardingSteps"
        component={OnboardingSteps}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
