import {defaultTo, map} from 'ramda';
import {ChangeEvent} from 'react';
import {css} from '@emotion/css';
import theme from '../theme';

type OptionType<ValueType> = {
  value: ValueType;
  label: string;
};

type ChoiceProps<ValueType> = {
  value: ValueType | null;
  onChange: (value: ValueType | null) => void;
  options: OptionType<ValueType>[];
};

function Choice<ValueType extends string | number = string>(
  props: ChoiceProps<ValueType>,
) {
  const value = defaultTo('<default>', props.value);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '<default>') return props.onChange(null);

    if (props.options.length && typeof props.options[0].value === 'number') {
      return props.onChange(Number(e.target.value) as ValueType);
    }

    props.onChange(e.target.value as ValueType);
  };

  return (
    <select
      className={css`
        background-color: ${theme.colors.neutral_200};
        border: none;
        box-sizing: border-box;
        color: ${theme.colors.neutral_400};
        outline: none;
        padding: ${theme.sizes['2']};
        width: 100%;
      `}
      value={value}
      onChange={onChange}
    >
      <option value="<default>">Choose</option>
      {map(
        (option: OptionType<ValueType>) => (
          <option value={option.value} key={`choice-opt-${option.value}`}>
            {option.label}
          </option>
        ),
        props.options,
      )}
    </select>
  );
}

export default Choice;
