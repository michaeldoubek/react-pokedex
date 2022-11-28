import theme, {Color} from '../theme';
import {HStack} from '../stack';
import {css} from '@emotion/css';
import {Text} from '../text';

type ProgressBarProps = {
  color: Color;
  label: string;
  value: number;
};

function ProgressBar(props: ProgressBarProps) {
  return (
    <HStack spacing={4} align="center">
      <div
        className={css`
          background-color: ${theme.colors[props.color]};
          height: ${theme.sizes['4']};
          border-radius: ${theme.sizes['2']};
          flex: 2;
        `}
      />

      <Text variant="subtitle">{`${props.label}: ${props.value}`}</Text>
    </HStack>
  );
}

export default ProgressBar;
