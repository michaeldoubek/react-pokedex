import {css} from '@emotion/css';
import {ReactNode} from 'react';

type ClickableProps = {
  onClick: () => void;
  children: ReactNode;
};

function Clickable(props: ClickableProps) {
  return (
    <button
      onClick={props.onClick}
      className={css`
        all: unset;
        cursor: pointer;
      `}
    >
      {props.children}
    </button>
  );
}

export default Clickable;
