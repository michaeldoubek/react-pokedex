import {GetPokemonTypesQuery, useGetPokemonTypesQuery} from '../../api';
import {map, toLower} from 'ramda';

function usePokemonTypesChoiceOptions() {
  const {loading, data} = useGetPokemonTypesQuery();
  return loading
    ? []
    : map(
        (type) => ({
          value: toLower(type),
          label: type,
        }),
        // Data are not undefined anymore, when loading is done.
        (data as GetPokemonTypesQuery).pokemonTypes,
      );
}

export default usePokemonTypesChoiceOptions;
