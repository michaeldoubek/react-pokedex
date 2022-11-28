import {Page, Show} from '../elements';
import {useState} from 'react';
import {Category, FiltersBar, ViewMode} from '../components';
import {useFavorites} from './hooks';
import {All, Favorite} from './list-tabs';

function List() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const {favorite, unFavorite} = useFavorites();

  return (
    <Page title="Pokedex">
      <FiltersBar
        category={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        type={selectedType}
        onTypeChange={setSelectedType}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <Show when={selectedCategory === 'all'}>
        <All
          searchQuery={searchQuery}
          selectedType={selectedType}
          viewMode={viewMode}
          favorite={favorite}
          unFavorite={unFavorite}
        />
      </Show>

      <Show when={selectedCategory === 'favorite'}>
        <Favorite
          searchQuery={searchQuery}
          selectedType={selectedType}
          viewMode={viewMode}
          favorite={favorite}
          unFavorite={unFavorite}
        />
      </Show>
    </Page>
  );
}

export default List;
