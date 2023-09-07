import { View, Image } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

type StepContainerProps = {
  children: React.ReactNode;
  stepImage?: any;
};

const StepContainer = ({ children, stepImage }: StepContainerProps) => {
  const { colorScheme } = useColorScheme();
  const bgImage =
    colorScheme === "dark"
      ? require("../../../../../assets/stepper/StepsBG-Dark.png")
      : require("../../../../../assets/stepper/StepsBG.png");

  return (
    <>
      <View className="flex flex-row justify-between items-center placeholder:relative h-3/5">
        <Image
          source={bgImage}
          className="absolute inset-0 w-full h-full top-4"
          resizeMode="stretch"
        />
        <Image
          source={stepImage}
          className="absolute inset-0 w-[98%] m-auto ml-[1%]"
          resizeMode="contain"
        />
      </View>
      <View className="space-y-3 ml-6 mr-11">{children}</View>
    </>
  );
};

export default StepContainer;
