import {ReactNode} from 'react';
import {css} from '@emotion/css';
import theme, {Breakpoint, Size} from '../theme';

type GridProps = {
  children: ReactNode;
  columns: Record<Breakpoint, 2 | 3 | 4 | 5 | 6>;
  spacing?: Size;
};

function Grid(props: GridProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr;
        gap: ${theme.sizes[props.spacing || '0']};

        @media (min-width: ${theme.breakpoints.sm}px) {
          grid-template-columns: repeat(${props.columns.sm}, 1fr);
        }

        @media (min-width: ${theme.breakpoints.md}px) {
          grid-template-columns: repeat(${props.columns.md}, 1fr);
        }

        @media (min-width: ${theme.breakpoints.lg}px) {
          grid-template-columns: repeat(${props.columns.lg}, 1fr);
        }
      `}
    >
      {props.children}
    </div>
  );
}

export default Grid;
