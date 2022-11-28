import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon,
};

export function Default() {
  return <Icon icon="list" />;
}

export function Size() {
  return (
    <>
      <Icon icon="list" size={2} />
      <Icon icon="list" size={4} />
      <Icon icon="list" size={6} />
      <Icon icon="list" size={8} />
    </>
  );
}

export function Color() {
  return (
    <>
      <Icon icon="list" color="neutral_700" />
      <Icon icon="list" color="green" />
      <Icon icon="list" color="purple" />
      <Icon icon="list" color="red" />
    </>
  );
}

export function IconList() {
  return (
    <>
      <Icon icon="list" />
      <Icon icon="grid" />
      <Icon icon="heart/outline" />
      <Icon icon="heart/filled" />
      <Icon icon="sound" />
      <Icon icon="spinner" />
    </>
  );
}
