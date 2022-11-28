import {IconProps} from '../icon/Icon';
import {Icon} from '../icon';
import {Clickable} from '../clickable';

type IconButtonProps = {
  onClick: () => void;
} & IconProps;

function IconButton(props: IconButtonProps) {
  const {onClick, ...iconProps} = props;

  return (
    <Clickable onClick={onClick}>
      <Icon {...iconProps} />
    </Clickable>
  );
}

export default IconButton;
