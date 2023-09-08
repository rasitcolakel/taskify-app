import { useColorScheme } from 'nativewind';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

import StepContainer from './StepContainer';

type Props = {};

const ThirdStep = (props: Props) => {
  const { colorScheme } = useColorScheme();
  const stepImage = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step3.png')
      : require('@assets/stepper/Step3-Dark.png');
  }, [colorScheme]);

  return (
    <StepContainer stepImage={stepImage} stepContent={<StepImage />}>
      <Text className="text-lg text-primary-500 dark:text-primary-dark-500 font-Poppins-Medium">
        Task Management
      </Text>
      <Text className="text-4xl font-Poppins-Regular leading-[45px] text-black dark:text-white">
        Manage your{' '}
        <Text className="font-Poppins-SemiBold text-primary-500 dark:text-primary-dark-500">
          Tasks
        </Text>{' '}
        quickly for Results✌
      </Text>
    </StepContainer>
  );
};

const StepImage = () => {
  const { colorScheme } = useColorScheme();
  const image1 = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step3-Item1.png')
      : require('@assets/stepper/Step3-Item1-Dark.png');
  }, [colorScheme]);

  const image2 = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step3-Item2.png')
      : require('@assets/stepper/Step3-Item2-Dark.png');
  }, [colorScheme]);

  return (
    <View className="flex w-[96%] justify-center mx-[2%]">
      <Animated.Image
        source={image1}
        className="w-[40%] absolute left-1 bottom-1"
        entering={FadeInLeft.delay(1000).duration(350)}
        resizeMode="contain"
      />
      <Animated.Image
        source={image2}
        className="w-[40%] absolute -top-16 right-0"
        entering={FadeInRight.delay(1350).duration(350)}
        resizeMode="contain"
      />
    </View>
  );
};

export default ThirdStep;
