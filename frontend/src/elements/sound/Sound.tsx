import {IconButton} from '../icon-button';
import {useMemo} from 'react';
import {Size} from '../theme';

type SoundProps = {
  source: string;
  iconSize?: Size;
};

function Sound(props: SoundProps) {
  const audioObject = useMemo(() => new Audio(props.source), [props.source]);
  const play = () => audioObject.play();

  return <IconButton icon="sound" size={12} color="green" onClick={play} />;
}

export default Sound;
