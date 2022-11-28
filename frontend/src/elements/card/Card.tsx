import {ReactNode} from 'react';
import {Show} from '../show';
import {css} from '@emotion/css';
import theme from '../theme';
import {HStack, VStack} from '../stack';
import {Box} from '../box';
import {isNotNil} from 'ramda-adjunct';

type CardProps = {
  children: ReactNode;
  header?: ReactNode;
  direction?: 'horizontal' | 'vertical';
};

function Card(props: CardProps) {
  const StackComponentByDirection =
    props.direction === 'horizontal' ? HStack : VStack;

  return (
    <section
      className={css`
        border: 1px solid ${theme.colors.neutral_400};
      `}
    >
      <StackComponentByDirection justify="space-between">
        <Show when={isNotNil(props.header)}>
          <Box
            flex={props.direction === 'horizontal' ? undefined : 2}
            padding={6}
          >
            {props.header}
          </Box>
        </Show>

        <Box
          backgroundColor="neutral_200"
          flex={props.direction === 'horizontal' ? 2 : undefined}
          padding={6}
        >
          {props.children}
        </Box>
      </StackComponentByDirection>
    </section>
  );
}

export default Card;
