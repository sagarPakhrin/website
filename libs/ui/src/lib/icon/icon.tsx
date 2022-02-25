import React from 'react';
import * as icons from '../../assets/icons';

export type Icons = typeof icons;
export type IconName = keyof Icons;

/* eslint-disable-next-line */
export interface IconProps {
  name: IconName;
  className?: string;
  outline?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  outline,
  ...props
}: IconProps) => {
  const SVG = icons[name];
  return (
    <SVG
      className={`${className ?? ''} ${
        outline ? 'stroke-current' : 'fill-current'
      } flex-shrink-0`}
      {...props}
    />
  );
};

export default Icon;
