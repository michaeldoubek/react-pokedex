import {defaultTo} from 'ramda';
import {ChangeEvent} from 'react';
import {css} from '@emotion/css';
import theme from '../theme';

type InputProps = {
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
};

function Input(props: InputProps) {
  const value = defaultTo('', props.value);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return props.onChange(null);
    props.onChange(e.target.value);
  };

  return (
    <input
      className={css`
        all: unset;
        background-color: ${theme.colors.neutral_200};
        box-sizing: border-box;
        color: ${theme.colors.neutral_700};
        padding: ${theme.sizes['2']};
        width: 100%;

        ::placeholder {
          color: ${theme.colors.neutral_400};
        }
      `}
      value={value}
      onChange={onChange}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
