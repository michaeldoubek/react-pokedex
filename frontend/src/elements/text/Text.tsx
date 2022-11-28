import {ElementType} from 'react';
import {css} from '@emotion/css';
import theme from '../theme';

type TextProps = {
  variant: 'title' | 'subtitle' | 'body';
  children: string;
};

function Text(props: TextProps) {
  const Component = variantToElementMap[props.variant];
  return (
    <Component
      className={css`
        color: inherit;
        margin: 0;
        padding: 0;
        line-height: 1.3;
        letter-spacing: 0.045rem;
        font-size: ${theme.typography[props.variant].size};
        font-size: ${theme.typography[props.variant].sizeFluid};
        font-weight: ${theme.typography[props.variant].weight};
      `}
    >
      {props.children}
    </Component>
  );
}

const variantToElementMap: Record<TextProps['variant'], ElementType> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
};

export default Text;
