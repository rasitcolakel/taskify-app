import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/types/navigation';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Button, Dimensions, Image, Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding', ''>;

export default function GetStarted({ navigation }: Props) {
  const { width } = Dimensions.get('screen');
  const { colorScheme } = useColorScheme();

  const goToOnboardingSteps = () => {
    navigation.push('Onboarding', {
      screen: 'OnboardingSteps',
    });
  };

  return (
    <View className="flex flex-1 bg-[#6C5CFF]">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Image
        source={require('@assets/stepper/GetStarted.jpg')}
        style={{ width: width, height: width }}
      />
      <View className="grow rounded-t-3xl bg-bg dark:bg-bg-dark flex flex-1 items-center">
        <View className="space-y-7 flex-1 justify-center  w-9/12">
          <Text className="text-center text-indigo text-6xl font-PT-Bold text-primary-500 dark:text-primary-dark-500">
            Taskify
          </Text>
          <View className="flex flex-col justify-center items-center w-full">
            <Text className="text-center text-indigo text-4xl leading-[50px] font-PT-Bold tracking-widest text-black dark:text-white">
              Building Better Workplaces
            </Text>
            <Text className="text-center text-md text-secondary-600 dark:text-secondary-600 font-PT-Bold mt-4">
              Create a unique emotional story that describes better than words
            </Text>
          </View>
          <Button
            title={`Get Started`}
            onPress={goToOnboardingSteps}
            containerClassName="mt-12"
            textClassName="font-PT-Bold text-xl py-1"
          />
        </View>
      </View>
    </View>
  );
}
