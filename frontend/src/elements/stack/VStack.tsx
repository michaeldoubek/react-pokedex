import {ReactNode} from 'react';
import theme, {Size} from '../theme';
import {css} from '@emotion/css';

type VStackProps = {
  children: ReactNode;
  spacing?: Size;
  justify?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  align?: 'flex-start' | 'center' | 'flex-end';
};

function VStack(props: VStackProps) {
  return (
    <div
      className={css`
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: ${theme.sizes[props?.spacing || '0']};
        justify-content: ${props.justify || 'initial'};
        align-items: ${props.align || 'initial'};
      `}
    >
      {props.children}
    </div>
  );
}

export default VStack;
