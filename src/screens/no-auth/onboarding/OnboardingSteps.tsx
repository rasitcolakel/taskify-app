import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, LayoutChangeEvent, TouchableOpacity, View } from 'react-native';

import StepperButtonBG from '@src/assets/StepperButtonBG';

import Button from '@src/components/Button';
import StepperDot from '@src/components/StepperDot';
import FirstStep from './stepper/FirstStep';
import SecondStep from './stepper/SecondStep';
import ThirdStep from './stepper/ThirdStep';

type Props = {};

const OnboardingSteps = ({}: Props) => {
  const [currentDot, setCurrentDot] = React.useState(0);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [stepperButtonHeight, setStepperButtonHeight] = React.useState(0);
  const [stepperButtonTextHeight, setStepperButtonTextHeight] =
    React.useState(0);

  const handleStepperButtonLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setStepperButtonHeight(height);
  };

  const handleStepperButtonTextLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setStepperButtonTextHeight(height);
  };

  const top = stepperButtonHeight / 2;

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
    }
  };

  const handleNextStep = () => {
    if (currentDot === 2) {
      setCurrentDot(0);
      return;
    }
    setCurrentDot((prev) => prev + 1);
  };

  return (
    <View className="bg-bg dark:bg-bg-dark flex-1 h-full">
      {renderStep(currentDot)}
      <View className="flex flex-row justify-between items-stretch">
        <View className="flex flex-col items-baseline flex-1 justify-between px-6 pt-6 pb-12">
          <StepperDot dotCount={3} currentDot={currentDot} />
          <Button
            title={`Skip`}
            onPress={toggleColorScheme}
            type="link"
            textClassName="text-base"
          />
        </View>
        <TouchableOpacity
          className="relative align-end"
          onPress={handleNextStep}
        >
          <View onLayout={handleStepperButtonLayout}>
            <StepperButtonBG fill="fill-primary-500 dark:fill-primary-dark-500" />
          </View>
          <View
            className="absolute flex justify-center items-center flex-1 w-full bottom-12 -right-3"
            style={{ top }}
            onLayout={handleStepperButtonTextLayout}
          >
            <Image source={require('@assets/stepper/ArrowRight.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type StepProps = {
  bgImage: any;
};

// const Step1 = ({ bgImage }: StepProps) => {
//   return (
//     <>
//       <View className="flex flex-row justify-between items-center placeholder:relative h-3/5">
//         <Image
//           source={bgImage}
//           className="absolute inset-0 w-full h-full top-4"
//           resizeMode="stretch"
//         />
//         <Image
//           source={require("@assets/Step1.png")}
//           className="absolute inset-0 w-full h-full top-4"
//           resizeMode="center"
//         />
//       </View>
//       <View className="space-y-3 ml-6 mr-11">
//         <Text className="text-lg text-primary-500 dark:text-primary-dark-500 font-Poppins-Medium">
//           Task Management
//         </Text>
//         <Text className="text-4xl font-Poppins-Regular leading-[45px] text-black dark:text-white">
//           Let's create a{" "}
//           <Text className="font-Poppins-SemiBold text-primary-500 dark:text-primary-dark-500">
//             space
//           </Text>{" "}
//           for your workflows.
//         </Text>
//       </View>
//     </>
//   );
// };

export default OnboardingSteps;
