import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Icon = ({IconComponent, width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <IconComponent fill={fill} />
    </Svg>
  );
};

export default Icon;
