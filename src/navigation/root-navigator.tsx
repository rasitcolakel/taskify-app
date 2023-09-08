import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingNavigator } from '@src/navigation/onboarding-navigator';
import { RootStackParamList } from '@src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
