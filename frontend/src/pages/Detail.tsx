import {Box, Page, State, Text, Show} from '../elements';
import {useParams} from 'react-router-dom';
import {PokemonDetailCard, PokemonList} from '../components';
import {useGetPokemonByNameQuery} from '../api';
import {useFavorites} from './hooks';

type RouteParams = {pokemonName: string};

function Detail() {
  const {pokemonName} = useParams<RouteParams>() as RouteParams;
  const {loading, error, data} = useGetPokemonByNameQuery({
    variables: {
      name: pokemonName,
    },
  });

  const {favorite, unFavorite} = useFavorites();

  return (
    <Page title={`${pokemonName} Detail`}>
      <State
        isLoading={loading}
        error={error?.message}
        data={data?.pokemonByName}
      >
        {(pokemon) => (
          <>
            <PokemonDetailCard
              name={pokemonName}
              types={pokemon.types}
              imageSource={pokemon.image}
              soundSource={pokemon.sound}
              isFavorite={pokemon.isFavorite}
              onFavorite={() => favorite(pokemon.id)}
              onUnFavorite={() => unFavorite(pokemon.id)}
              heightMin={pokemon.height.minimum}
              heightMax={pokemon.height.maximum}
              weightMin={pokemon.weight.minimum}
              weightMax={pokemon.weight.maximum}
              cp={pokemon.maxCP}
              hp={pokemon.maxHP}
            />

            <Show when={pokemon.evolutions.length > 0}>
              <Box padding={6}>
                <Text variant="subtitle">Evolutions</Text>
              </Box>

              <PokemonList
                pokemons={pokemon.evolutions}
                viewMode="grid"
                onFavorite={favorite}
                onUnFavorite={unFavorite}
              />
            </Show>
          </>
        )}
      </State>
    </Page>
  );
}

export default Detail;
