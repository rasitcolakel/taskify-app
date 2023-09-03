import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
  OnboardingSteps: undefined;
  GetStarted: undefined;
};
export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};
