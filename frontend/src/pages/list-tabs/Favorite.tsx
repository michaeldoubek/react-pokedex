import {PokemonList, ViewMode} from '../../components';
import {usePokemonList} from '../hooks';
import {isNotNil} from 'ramda-adjunct';
import {State} from '../../elements';

type FavoriteProps = {
  searchQuery: string | null;
  selectedType: string | null;
  viewMode: ViewMode;
  favorite: (id: string) => void;
  unFavorite: (id: string) => void;
};

function Favorite(props: FavoriteProps) {
  const {loading, error, data, loadMore} = usePokemonList({
    selectedCategory: 'favorite',
    searchQuery: props.searchQuery,
    selectedType: props.selectedType,
    fetchPolicy: 'network-only',
  });

  const emptyMessage = (() => {
    if (isNotNil(props.searchQuery))
      return `We haven't found any pokemon matching the search query "${props.searchQuery}"`;
    if (isNotNil(props.selectedType))
      return `You have no favorite pokemons of type ${props.selectedType}`;

    return `You have no favorite pokemons yet.`;
  })();

  return (
    <State
      isLoading={loading}
      emptyMessage={emptyMessage}
      error={error?.message}
      data={data?.pokemons.edges}
    >
      {(pokemons) => (
        <PokemonList
          pokemons={pokemons}
          viewMode={props.viewMode}
          onFavorite={props.favorite}
          onUnFavorite={props.unFavorite}
          onScrollDown={loadMore}
        />
      )}
    </State>
  );
}

export default Favorite;
