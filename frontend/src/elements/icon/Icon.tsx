import {IconKey, iconsList} from './iconsList';
import theme, {Color, Size} from '../theme';
import {css} from '@emotion/css';

export type IconProps = {
  icon: IconKey;
  color?: Color;
  size?: Size;
};

function Icon(props: IconProps) {
  return (
    <div
      role="img"
      className={css`
        color: ${theme.colors[props.color || 'neutral_700']};

        svg {
          display: block;
          width: ${theme.sizes[props.size || '4']};
          height: ${theme.sizes[props.size || '4']};
        }

        svg,
        svg path,
        svg g,
        svg rect {
          // Some icons use inline styles to set fill property, therefore we need !important here.
          fill: currentColor !important;
        }
      `}
    >
      {iconsList[props.icon]}
    </div>
  );
}

export default Icon;
