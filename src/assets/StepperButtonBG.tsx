import { styled } from 'nativewind';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const StyledPath = styled(Path, { classProps: ['fill', 'stroke'] });

function StepperButtonBG({ fill, ...props }: SvgProps) {
  return (
    <Svg width={103} height={162} viewBox="0 0 103 162" {...props}>
      <StyledPath
        d="M1.99 123.73c-6.484-37.892 13.272-75.418 48.18-91.52L120 0v191H13.5L1.99 123.73z"
        fill={fill}
      />
    </Svg>
  );
}

export default StepperButtonBG;
