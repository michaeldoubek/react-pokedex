import {ReactNode} from 'react';
import theme, {Color, Elevation, Size} from '../theme';
import {css} from '@emotion/css';

type BoxProps = {
  children: ReactNode;
  flex?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: Color;
  backgroundColor?: Color;
  padding?: Size;
  elevation?: Elevation;
  height?: string;
  width?: string;
};

function Box(props: BoxProps) {
  return (
    <div
      className={css`
        flex: ${props.flex || 'initial'};
        height: ${props?.height || 'initial'};
        width: ${props?.width || 'initial'};
        color: ${props.color ? theme.colors[props.color] : 'initial'};
        background-color: ${props.backgroundColor
          ? theme.colors[props.backgroundColor]
          : 'none'};
        padding: ${theme.sizes[props.padding || '0']};
        box-shadow: ${props.elevation
          ? theme.elevations[props.elevation]
          : 'none'};
      `}
    >
      {props.children}
    </div>
  );
}

export default Box;
