import State from './State';

export default {
  title: 'State',
  component: State,
};

const data: number[] | undefined = [1, 5, 6];

export function Default() {
  return <State data={data}>{(data) => data.map((num) => num)}</State>;
}

export function Loading() {
  return (
    <State isLoading data={data}>
      {(data) => data.map((num) => num)}
    </State>
  );
}

export function Error() {
  return (
    <State error="Could not fetch data" data={data}>
      {(data) => data.map((num) => num)}
    </State>
  );
}

export function Empty() {
  return (
    <State isEmpty data={data}>
      {(data) => data.map((num) => num)}
    </State>
  );
}

export function EmptyWithMessage() {
  return (
    <State isEmpty emptyMessage="You have not favorite pokemons" data={data}>
      {(data) => data.map((num) => num)}
    </State>
  );
}
