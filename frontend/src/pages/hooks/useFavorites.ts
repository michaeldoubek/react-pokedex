import {
  useFavoritePokemonMutation,
  useUnFavoritePokemonMutation,
} from '../../api';

function useFavorites() {
  const [favoriteMutation] = useFavoritePokemonMutation();
  const [unFavoriteMutation] = useUnFavoritePokemonMutation();
  const favorite = (id: string) => favoriteMutation({variables: {id}});
  const unFavorite = (id: string) => unFavoriteMutation({variables: {id}});

  return {favorite, unFavorite};
}

export default useFavorites;
