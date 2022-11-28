import {
  Box,
  Choice,
  HStack,
  IconButton,
  Input,
  Tabs,
  VStack,
} from '../../elements';
import usePokemonTypesChoiceOptions from './usePokemonTypesChoiceOptions';

export type Category = 'all' | 'favorite';
export type ViewMode = 'grid' | 'list';

type FiltersBarProps = {
  category: Category;
  onCategoryChange: (category: Category) => void;

  searchQuery: string | null;
  onSearchQueryChange: (value: string | null) => void;

  type: string | null;
  onTypeChange: (value: string | null) => void;

  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
};

function FiltersBar(props: FiltersBarProps) {
  const pokemonTypesOptions = usePokemonTypesChoiceOptions();

  const switchViewModeToGrid = () => props.onViewModeChange('grid');
  const switchViewModeToList = () => props.onViewModeChange('list');

  return (
    <Box elevation="1x" padding={6}>
      <VStack spacing={4}>
        <Tabs
          tabs={[
            {id: 'all', label: 'All'},
            {id: 'favorite', label: 'Favorite'},
          ]}
          selectedTabId={props.category}
          onChange={props.onCategoryChange}
        />

        <HStack spacing={4} align="center">
          <Box flex={4}>
            <Input
              value={props.searchQuery}
              onChange={props.onSearchQueryChange}
              placeholder="Search"
            />
          </Box>

          <Box flex={2}>
            <Choice
              options={pokemonTypesOptions}
              value={props.type}
              onChange={props.onTypeChange}
            />
          </Box>

          <IconButton
            onClick={switchViewModeToGrid}
            icon="grid"
            size={6}
            color="green"
          />
          <IconButton
            onClick={switchViewModeToList}
            icon="list"
            size={6}
            color="green"
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default FiltersBar;
