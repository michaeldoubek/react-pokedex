import {useGetPokemonsQuery} from '../../api';
import {useDeferredValue} from 'react';
import {defaultTo} from 'ramda';
import {Category} from '../../components';
import {FetchPolicy} from '@apollo/client';

type PokemonListOptions = {
  selectedCategory: Category;
  searchQuery: string | null;
  selectedType: string | null;
  fetchPolicy?: FetchPolicy;
};

const PER_PAGE = 25;

function usePokemonList(options: PokemonListOptions) {
  const deferredSearchQuery = useDeferredValue(options.searchQuery);
  const deferredSelectedType = useDeferredValue(options.selectedType);

  const {loading, error, data, fetchMore} = useGetPokemonsQuery({
    variables: {
      query: {
        limit: PER_PAGE,
        offset: 0,
        search: deferredSearchQuery,
        filter: {
          isFavorite: options.selectedCategory === 'favorite',
          type: deferredSelectedType,
        },
      },
    },
    fetchPolicy: options.fetchPolicy,
  });

  const loadMore = async () => {
    const numberOfPokemonsLoaded = defaultTo(0, data?.pokemons.edges.length);
    if (data && numberOfPokemonsLoaded >= data?.pokemons.count) return;

    return fetchMore({
      variables: {
        query: {
          limit: PER_PAGE,
          offset: numberOfPokemonsLoaded,
          search: deferredSearchQuery,
          filter: {
            isFavorite: options.selectedCategory === 'favorite',
            type: deferredSelectedType,
          },
        },
      },
      updateQuery: (previousQueryResult, {fetchMoreResult}) => {
        return {
          ...previousQueryResult,
          pokemons: {
            ...previousQueryResult.pokemons,
            edges: [
              ...previousQueryResult.pokemons.edges,
              ...fetchMoreResult.pokemons.edges,
            ],
          },
        };
      },
    });
  };

  return {loading, error, data, loadMore};
}

export default usePokemonList;
