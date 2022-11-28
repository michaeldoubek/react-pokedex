import {ReactComponent as Grid} from './icons/grid.svg';
import {ReactComponent as HeartFilled} from './icons/heart-filled.svg';
import {ReactComponent as HeartOutline} from './icons/heart-outline.svg';
import {ReactComponent as List} from './icons/list.svg';
import {ReactComponent as Sound} from './icons/sound.svg';
import {ReactComponent as Spinner} from './icons/spinner.svg';

export const iconsList = {
  grid: <Grid />,
  'heart/filled': <HeartFilled />,
  'heart/outline': <HeartOutline />,
  list: <List />,
  sound: <Sound />,
  spinner: <Spinner />,
};

export type IconKey = keyof typeof iconsList;
