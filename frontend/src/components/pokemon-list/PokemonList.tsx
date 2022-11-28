import {GetPokemonsQuery} from '../../api';
import {ViewMode} from '../filters-bar';
import {
  Box,
  Card,
  Clickable,
  Grid,
  HStack,
  IconButton,
  Image,
  Show,
  Text,
  VStack,
} from '../../elements';
import {always, cond, equals, join, max} from 'ramda';
import {mapIndexed} from 'ramda-adjunct';
import {useNavigate} from 'react-router-dom';
import {Waypoint} from 'react-waypoint';

type PokemonListProps = {
  pokemons: GetPokemonsQuery['pokemons']['edges'];
  viewMode: ViewMode;
  onFavorite: (pokemonId: string) => void;
  onUnFavorite: (pokemonId: string) => void;
  onScrollDown?: () => void;
};

function PokemonList(props: PokemonListProps) {
  const navigate = useNavigate();

  const items = mapIndexed(
    (pokemon, index) => (
      <Card
        key={`pokemon-list-item-${pokemon.id}`}
        direction={getCardDirection(props.viewMode)}
        header={
          <VStack justify="center" align="center">
            <Box
              width={
                getCardDirection(props.viewMode) === 'horizontal'
                  ? '5rem'
                  : '70%'
              }
            >
              <Clickable onClick={() => navigate(`/${pokemon.name}`)}>
                <Image
                  source={pokemon.image}
                  alt={`Image of ${pokemon.name}`}
                />
              </Clickable>
            </Box>
          </VStack>
        }
      >
        <HStack justify="space-between" align="center">
          <Clickable onClick={() => navigate(pokemon.name)}>
            <Text variant="subtitle">{pokemon.name}</Text>
            <Text variant="body">{join(', ', pokemon.types)}</Text>
          </Clickable>
          <div style={{color: 'red'}}>
            <IconButton
              onClick={() =>
                pokemon.isFavorite
                  ? props.onUnFavorite(pokemon.id)
                  : props.onFavorite(pokemon.id)
              }
              icon={pokemon.isFavorite ? 'heart/filled' : 'heart/outline'}
              size={8}
              color="red"
            />
          </div>
        </HStack>
        <Show
          when={
            props?.onScrollDown !== undefined &&
            index === max(0, props.pokemons.length - 10)
          }
        >
          <Waypoint onEnter={props.onScrollDown} />
        </Show>
      </Card>
    ),
    props.pokemons,
  );

  if (props.viewMode === 'grid') {
    return (
      <Box padding={6}>
        <Grid columns={{sm: 3, md: 4, lg: 5}} spacing={4}>
          {items}
        </Grid>
      </Box>
    );
  }

  if (props.viewMode === 'list')
    return (
      <Box padding={6}>
        <VStack spacing={4}>{items}</VStack>
      </Box>
    );

  return null;
}

const getCardDirection = cond<[a: ViewMode], 'vertical' | 'horizontal'>([
  [equals('grid' as ViewMode), always('vertical')],
  [equals('list' as ViewMode), always('horizontal')],
]);

export default PokemonList;
