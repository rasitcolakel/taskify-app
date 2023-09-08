import { useColorScheme } from 'nativewind';
import React, { useEffect, useMemo } from 'react';
import { ImageProps, Text, View } from 'react-native';
import Animated, {
  AnimateProps,
  Easing,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import StepContainer from './StepContainer';

type Props = {};

const FirstStep = (props: Props) => {
  return (
    <StepContainer stepContent={<StepImage />}>
      <Text className="text-lg text-primary-500 dark:text-primary-dark-500 font-Poppins-Medium">
        Task Management
      </Text>
      <Text className="text-4xl font-Poppins-Regular leading-[45px] text-black dark:text-white">
        Let's create a{' '}
        <Text className="font-Poppins-SemiBold text-primary-500 dark:text-primary-dark-500">
          space
        </Text>{' '}
        for your workflows.
      </Text>
    </StepContainer>
  );
};

const StepImage = () => {
  const { colorScheme } = useColorScheme();
  const image1 = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step1-Item1.png')
      : require('@assets/stepper/Step1-Item1-Dark.png');
  }, [colorScheme]);

  const image2 = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step1-Item2.png')
      : require('@assets/stepper/Step1-Item2-Dark.png');
  }, [colorScheme]);

  const image3 = useMemo(() => {
    return colorScheme === 'light'
      ? require('@assets/stepper/Step1-Item3.png')
      : require('@assets/stepper/Step1-Item3-Dark.png');
  }, [colorScheme]);

  return (
    <View className="flex w-[94%] justify-center mx-[3%]">
      <MovingImage
        source={image1}
        className="w-7/12 self-end absolute bottom-4 right-8"
        entering={FadeInUp.duration(350)}
        resizeMode="contain"
        xMultiplier={1}
        yMultiplier={3}
      />
      <MovingImage
        source={image2}
        className="w-8/12 self-start absolute left-2 -top-16"
        entering={FadeInLeft.delay(350).duration(350)}
        resizeMode="contain"
      />
      <MovingImage
        source={image3}
        className="w-8/12 self-end absolute top-2"
        entering={FadeInRight.delay(700).duration(350)}
        resizeMode="contain"
      />
    </View>
  );
};

type MovingImageProps = AnimateProps<ImageProps> & {
  xMultiplier?: number;
  yMultiplier?: number;
};

const MovingImage = ({
  xMultiplier = 3,
  yMultiplier = 3,
  ...props
}: MovingImageProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const randomValue = () => Math.floor(Math.random() * 11) - 5;

    const moveRandomly = () => {
      const x = randomValue() * xMultiplier;
      const y = randomValue() * yMultiplier;

      translateX.value = withTiming(x, {
        duration: 1000,
        easing: Easing.linear,
      });
      translateY.value = withTiming(y, {
        duration: 1000,
        easing: Easing.linear,
      });
    };

    const randomDirection = () => {
      const delay = Math.random() * 3000;
      setTimeout(() => {
        moveRandomly();
        randomDirection();
      }, delay);
    };

    randomDirection(); // Start the random movement loop

    return () => {
      // Clean up when the component unmounts
      translateX.value = 0;
      translateY.value = 0;
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return <Animated.Image {...props} style={[animatedStyle, props.style]} />;
};

export default FirstStep;
