import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Onboarding from "../screens/no-auth/onboarding/OnboardingSteps";
import GetStarted from "../screens/no-auth/onboarding/GetStarted";

export type AuthStackParamList = {
  Onboarding: undefined;
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};
