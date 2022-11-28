import {IconButton} from './index';
import {action} from '@storybook/addon-actions';

export default {
  title: 'IconButton',
  component: IconButton,
};

export function Default() {
  return <IconButton icon="list" onClick={action('onClick')} />;
}

export function Size() {
  return (
    <>
      <IconButton icon="list" size={2} onClick={action('onClick')} />
      <IconButton icon="list" size={4} onClick={action('onClick')} />
      <IconButton icon="list" size={6} onClick={action('onClick')} />
      <IconButton icon="list" size={8} onClick={action('onClick')} />
    </>
  );
}

export function Color() {
  return (
    <>
      <IconButton icon="list" color="neutral_700" onClick={action('onClick')} />
      <IconButton icon="list" color="green" onClick={action('onClick')} />
      <IconButton icon="list" color="purple" onClick={action('onClick')} />
      <IconButton icon="list" color="red" onClick={action('onClick')} />
    </>
  );
}
