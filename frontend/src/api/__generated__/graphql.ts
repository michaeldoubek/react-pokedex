import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Attack = {
  __typename?: 'Attack';
  damage: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
};


export type MutationFavoritePokemonArgs = {
  id: Scalars['ID'];
};


export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks: PokemonAttack;
  classification: Scalars['String'];
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate: Scalars['Float'];
  height: PokemonDimension;
  id: Scalars['ID'];
  image: Scalars['String'];
  isFavorite: Scalars['Boolean'];
  maxCP: Scalars['Int'];
  maxHP: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  resistant: Array<Scalars['String']>;
  sound: Scalars['String'];
  types: Array<Scalars['String']>;
  weaknesses: Array<Scalars['String']>;
  weight: PokemonDimension;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename?: 'PokemonConnection';
  count: Scalars['Int'];
  edges: Array<Pokemon>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum: Scalars['String'];
  minimum: Scalars['String'];
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount: Scalars['Int'];
  name: Scalars['String'];
};

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
  pokemonTypes: Array<Scalars['String']>;
  pokemons: PokemonConnection;
};


export type QueryPokemonByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPokemonByNameArgs = {
  name: Scalars['String'];
};


export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename?: 'Root';
  query: Query;
};

export type UnFavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnFavoritePokemonMutation = { __typename?: 'Mutation', unFavoritePokemon?: { __typename?: 'Pokemon', id: string, isFavorite: boolean } | null };

export type GetPokemonByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPokemonByIdQuery = { __typename?: 'Query', pokemonById?: { __typename?: 'Pokemon', id: string, number: number, name: string, classification: string, types: Array<string>, resistant: Array<string>, maxCP: number, maxHP: number, image: string, sound: string, isFavorite: boolean, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, attacks: { __typename?: 'PokemonAttack', fast: Array<{ __typename?: 'Attack', name: string, type: string, damage: number }>, special: Array<{ __typename?: 'Attack', name: string, type: string, damage: number }> }, evolutions: Array<{ __typename?: 'Pokemon', id: string, number: number, name: string, classification: string, types: Array<string>, image: string, isFavorite: boolean }> } | null };

export type GetPokemonByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetPokemonByNameQuery = { __typename?: 'Query', pokemonByName?: { __typename?: 'Pokemon', id: string, number: number, name: string, classification: string, types: Array<string>, resistant: Array<string>, maxCP: number, maxHP: number, image: string, sound: string, isFavorite: boolean, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, attacks: { __typename?: 'PokemonAttack', fast: Array<{ __typename?: 'Attack', name: string, type: string, damage: number }>, special: Array<{ __typename?: 'Attack', name: string, type: string, damage: number }> }, evolutions: Array<{ __typename?: 'Pokemon', id: string, number: number, name: string, classification: string, types: Array<string>, image: string, isFavorite: boolean }> } | null };

export type GetPokemonTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPokemonTypesQuery = { __typename?: 'Query', pokemonTypes: Array<string> };

export type GetPokemonsQueryVariables = Exact<{
  query: PokemonsQueryInput;
}>;


export type GetPokemonsQuery = { __typename?: 'Query', pokemons: { __typename?: 'PokemonConnection', limit: number, offset: number, count: number, edges: Array<{ __typename?: 'Pokemon', id: string, number: number, name: string, classification: string, types: Array<string>, image: string, isFavorite: boolean }> } };

export type FavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FavoritePokemonMutation = { __typename?: 'Mutation', favoritePokemon?: { __typename?: 'Pokemon', id: string, isFavorite: boolean } | null };


export const UnFavoritePokemonDocument = gql`
    mutation unFavoritePokemon($id: ID!) {
  unFavoritePokemon(id: $id) {
    id
    isFavorite
  }
}
    `;
export type UnFavoritePokemonMutationFn = Apollo.MutationFunction<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>;

/**
 * __useUnFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useUnFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unFavoritePokemonMutation, { data, loading, error }] = useUnFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnFavoritePokemonMutation(baseOptions?: Apollo.MutationHookOptions<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>(UnFavoritePokemonDocument, options);
      }
export type UnFavoritePokemonMutationHookResult = ReturnType<typeof useUnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationResult = Apollo.MutationResult<UnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationOptions = Apollo.BaseMutationOptions<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>;
export const GetPokemonByIdDocument = gql`
    query getPokemonById($id: ID!) {
  pokemonById(id: $id) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      classification
      types
      image
      isFavorite
    }
    maxCP
    maxHP
    image
    sound
    isFavorite
  }
}
    `;

/**
 * __useGetPokemonByIdQuery__
 *
 * To run a query within a React component, call `useGetPokemonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPokemonByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>(GetPokemonByIdDocument, options);
      }
export function useGetPokemonByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>(GetPokemonByIdDocument, options);
        }
export type GetPokemonByIdQueryHookResult = ReturnType<typeof useGetPokemonByIdQuery>;
export type GetPokemonByIdLazyQueryHookResult = ReturnType<typeof useGetPokemonByIdLazyQuery>;
export type GetPokemonByIdQueryResult = Apollo.QueryResult<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>;
export function refetchGetPokemonByIdQuery(variables: GetPokemonByIdQueryVariables) {
      return { query: GetPokemonByIdDocument, variables: variables }
    }
export const GetPokemonByNameDocument = gql`
    query getPokemonByName($name: String!) {
  pokemonByName(name: $name) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      classification
      types
      image
      isFavorite
    }
    maxCP
    maxHP
    image
    sound
    isFavorite
  }
}
    `;

/**
 * __useGetPokemonByNameQuery__
 *
 * To run a query within a React component, call `useGetPokemonByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPokemonByNameQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>(GetPokemonByNameDocument, options);
      }
export function useGetPokemonByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>(GetPokemonByNameDocument, options);
        }
export type GetPokemonByNameQueryHookResult = ReturnType<typeof useGetPokemonByNameQuery>;
export type GetPokemonByNameLazyQueryHookResult = ReturnType<typeof useGetPokemonByNameLazyQuery>;
export type GetPokemonByNameQueryResult = Apollo.QueryResult<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>;
export function refetchGetPokemonByNameQuery(variables: GetPokemonByNameQueryVariables) {
      return { query: GetPokemonByNameDocument, variables: variables }
    }
export const GetPokemonTypesDocument = gql`
    query getPokemonTypes {
  pokemonTypes
}
    `;

/**
 * __useGetPokemonTypesQuery__
 *
 * To run a query within a React component, call `useGetPokemonTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPokemonTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>(GetPokemonTypesDocument, options);
      }
export function useGetPokemonTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>(GetPokemonTypesDocument, options);
        }
export type GetPokemonTypesQueryHookResult = ReturnType<typeof useGetPokemonTypesQuery>;
export type GetPokemonTypesLazyQueryHookResult = ReturnType<typeof useGetPokemonTypesLazyQuery>;
export type GetPokemonTypesQueryResult = Apollo.QueryResult<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>;
export function refetchGetPokemonTypesQuery(variables?: GetPokemonTypesQueryVariables) {
      return { query: GetPokemonTypesDocument, variables: variables }
    }
export const GetPokemonsDocument = gql`
    query getPokemons($query: PokemonsQueryInput!) {
  pokemons(query: $query) {
    limit
    offset
    count
    edges {
      id
      number
      name
      classification
      types
      image
      isFavorite
    }
  }
}
    `;

/**
 * __useGetPokemonsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetPokemonsQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
      }
export function useGetPokemonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
        }
export type GetPokemonsQueryHookResult = ReturnType<typeof useGetPokemonsQuery>;
export type GetPokemonsLazyQueryHookResult = ReturnType<typeof useGetPokemonsLazyQuery>;
export type GetPokemonsQueryResult = Apollo.QueryResult<GetPokemonsQuery, GetPokemonsQueryVariables>;
export function refetchGetPokemonsQuery(variables: GetPokemonsQueryVariables) {
      return { query: GetPokemonsDocument, variables: variables }
    }
export const FavoritePokemonDocument = gql`
    mutation favoritePokemon($id: ID!) {
  favoritePokemon(id: $id) {
    id
    isFavorite
  }
}
    `;
export type FavoritePokemonMutationFn = Apollo.MutationFunction<FavoritePokemonMutation, FavoritePokemonMutationVariables>;

/**
 * __useFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoritePokemonMutation, { data, loading, error }] = useFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavoritePokemonMutation(baseOptions?: Apollo.MutationHookOptions<FavoritePokemonMutation, FavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoritePokemonMutation, FavoritePokemonMutationVariables>(FavoritePokemonDocument, options);
      }
export type FavoritePokemonMutationHookResult = ReturnType<typeof useFavoritePokemonMutation>;
export type FavoritePokemonMutationResult = Apollo.MutationResult<FavoritePokemonMutation>;
export type FavoritePokemonMutationOptions = Apollo.BaseMutationOptions<FavoritePokemonMutation, FavoritePokemonMutationVariables>;