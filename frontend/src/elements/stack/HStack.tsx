import {ReactNode} from 'react';
import theme, {Size} from '../theme';
import {css} from '@emotion/css';

type HStackProps = {
  children: ReactNode;
  spacing?: Size;
  justify?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  align?: 'flex-start' | 'center' | 'flex-end';
};

function HStack(props: HStackProps) {
  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: ${theme.sizes[props?.spacing || '0']};
        justify-content: ${props.justify || 'initial'};
        align-items: ${props.align || 'initial'};
      `}
    >
      {props.children}
    </div>
  );
}

export default HStack;
