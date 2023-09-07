import { View, Text } from "react-native";
import React from "react";
import StepContainer from "./StepContainer";
import { useColorScheme } from "nativewind";

type Props = {};

const SecondStep = (props: Props) => {
  const { colorScheme } = useColorScheme();
  const stepImage =
    colorScheme === "light"
      ? require("../../../../../assets/stepper/Step2.png")
      : require("../../../../../assets/stepper/Step2-Dark.png");
  return (
    <StepContainer stepImage={stepImage}>
      <Text className="text-lg text-primary-500 dark:text-primary-dark-500 font-Poppins-Medium">
        Task Management
      </Text>
      <Text className="text-4xl font-Poppins-Regular leading-[45px] text-black dark:text-white">
        Work more{" "}
        <Text className="font-Poppins-SemiBold text-primary-500 dark:text-primary-dark-500">
          Structured
        </Text>{" "}
        and Organized 👌
      </Text>
    </StepContainer>
  );
};

export default SecondStep;
