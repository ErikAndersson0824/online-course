import React from 'react';
import classNames from 'classnames';

interface IconProps {
  name: string;
  size?: string;
  className?: string;
  variant?: string;
  // Add any other props if needed
}

const Icon: React.FC<IconProps> = ({
  name,
  size,
  className,
  variant,
  ...props
}) => {
  const compClass = classNames({
    [`${className}`]: className,
    [`icon ni ni-${name}`]: true,
    [`icon-${size}`]: size,
    [`text-${variant}`]: variant
  });

  return <em className={compClass}></em>;
};

export default Icon;
