import { useColorScheme } from 'nativewind';
import React, { useMemo } from 'react';
import { Image, View } from 'react-native';
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';

type StepContainerProps = {
  children: React.ReactNode;
  stepImage?: any;
  stepContent?: React.ReactNode;
};

const StepContainer = ({
  children,
  stepImage,
  stepContent,
}: StepContainerProps) => {
  const { colorScheme } = useColorScheme();
  const bgImage = useMemo(() => {
    return colorScheme === 'dark'
      ? require('@assets/stepper/StepsBG-Dark.png')
      : require('@assets/stepper/StepsBG.png');
  }, [colorScheme]);
  return (
    <Animated.View
      entering={FadeInLeft.duration(1000)}
      exiting={FadeOutRight.duration(1000)}
      className={`flex-1 flex justify-evenly`}
    >
      <View className="flex flex-row justify-between items-center relative h-3/5">
        <Image
          source={bgImage}
          className="absolute inset-0 w-full h-full top-4"
          resizeMode="stretch"
        />
        {stepImage ? (
          <Image
            source={stepImage}
            className="absolute inset-0 w-[98%] m-auto ml-[1%]"
            resizeMode="contain"
          />
        ) : null}
        {stepContent ? stepContent : null}
      </View>
      <View className="space-y-3 ml-6 mr-11">{children}</View>
    </Animated.View>
  );
};

export default StepContainer;
