import {PokemonList, ViewMode} from '../../components';
import {usePokemonList} from '../hooks';
import {isNotNil} from 'ramda-adjunct';
import {State} from '../../elements';

type AllProps = {
  searchQuery: string | null;
  selectedType: string | null;
  viewMode: ViewMode;
  favorite: (id: string) => void;
  unFavorite: (id: string) => void;
};

function All(props: AllProps) {
  const {loading, error, data, loadMore} = usePokemonList({
    selectedCategory: 'all',
    searchQuery: props.searchQuery,
    selectedType: props.selectedType,
  });

  const emptyMessage = isNotNil(props.searchQuery)
    ? `We haven't found any pokemon matching the search query "${props.searchQuery}"`
    : undefined;

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

export default All;
