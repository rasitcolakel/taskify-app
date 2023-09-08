import React, { useMemo } from 'react';
import { View } from 'react-native';

import { mergeClassNames } from '@src/utils';

type Props = {
  color?: string;
  dotCount: number;
  currentDot: number;
  dotClassName?: string;
};

type DotProps = {
  color: string;
  isCurrent: boolean;
};

const colors = {
  active: 'bg-primary-500 dark:bg-primary-dark-500',
  inactive: 'bg-primary-200 dark:bg-primary-dark-200',
};

export default function StepperDot({
  dotCount,
  currentDot,
  color,
  ...props
}: Props) {
  const dots = useMemo(() => {
    return Array.from({ length: dotCount }, (_, i) => {
      const isCurrent = i === currentDot;
      const bgColor = isCurrent ? color || colors.active : colors.inactive;
      const className = mergeClassNames(
        'rounded-full',
        bgColor,
        isCurrent ? 'w-6' : 'w-2',
        isCurrent ? 'h-4/5' : 'h-2',
        'pl-2',
        props.dotClassName ?? '',
      );

      return <View className={className} key={i} />;
    });
  }, [dotCount, currentDot]);

  return <View className="flex flex-row items-center space-x-2">{dots}</View>;
}
