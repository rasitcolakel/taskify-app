import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { mergeClassNames } from '@src/utils';

type Props = {
  title: string;
  type?: 'primary' | 'secondary' | 'link';
  onPress: () => void;
  textClassName?: string;
  containerClassName?: string;
};

const colors = {
  primary: 'bg-primary-500 dark:bg-primary-dark-500',
  secondary: 'bg-white',
  link: 'bg-transparent',
};

const textColors = {
  primary: 'text-white',
  secondary: 'text-primary-500 dark:text-primary-dark-500',
  link: 'text-black dark:text-white',
};

export default function Button({
  title,
  onPress,
  type = 'primary',
  ...props
}: Props) {
  const className = mergeClassNames(
    'flex justify-center items-center',
    colors[type],
    'rounded-xl',
    type === 'link' ? '' : ' py-3 px-5',
    props.containerClassName ?? '',
  );

  const textClassName = mergeClassNames(
    textColors[type],
    props.textClassName ?? '',
    type === 'link' ? '' : 'font-PT-Bold',
  );

  return (
    <Container onPress={onPress} className={className}>
      <Text className={`text-center text-lg ${textClassName}`}>{title}</Text>
    </Container>
  );
}

type ContainerProps = TouchableOpacityProps & {
  children: React.ReactNode;
  className: string;
};

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <TouchableOpacity className={className} {...props}>
      {children}
    </TouchableOpacity>
  );
};
