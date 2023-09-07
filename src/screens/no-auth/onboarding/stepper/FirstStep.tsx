import { View, Text } from "react-native";
import React from "react";
import StepContainer from "./StepContainer";

type Props = {};

const FirstStep = (props: Props) => {
  const stepImage = require("../../../../../assets/stepper/Step1.png");
  return (
    <StepContainer stepImage={stepImage}>
      <Text className="text-lg text-primary-500 dark:text-primary-dark-500 font-Poppins-Medium">
        Task Management
      </Text>
      <Text className="text-4xl font-Poppins-Regular leading-[45px] text-black dark:text-white">
        Let's create a{" "}
        <Text className="font-Poppins-SemiBold text-primary-500 dark:text-primary-dark-500">
          space
        </Text>{" "}
        for your workflows.
      </Text>
    </StepContainer>
  );
};

export default FirstStep;
