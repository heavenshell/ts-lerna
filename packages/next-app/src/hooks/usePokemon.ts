import { parse } from 'url'
import { ParsedUrlQuery } from 'querystring'

import axios from 'axios'
import useSWR from 'swr'
import { match } from 'path-to-regexp'

import { NamedAPIResourceList } from '../types'

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

const matched = match<{ id: string }>('/api/v2/pokemon/:id/')

const getKey = (query?: ParsedUrlQuery) => {
  const page = query && 'page' in query ? query.page : ''
  if (page) {
    return `pokemon?offset=${(Number(page) - 1) * 20}&limit=20`
  }
  return 'pokemon'
}

export const getPokemons = (url: string) =>
  api.get<NamedAPIResourceList<string>>(url).then((res) => res.data)

export const getPokemonImage = (url: string) => {
  const { path } = parse(url)
  if (path) {
    const ret = matched(path)
    if (ret) {
      const { params } = ret
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`
    }
  }
  return ''
}

export const useGetPokemons = (isReady: boolean, query?: ParsedUrlQuery) => {
  const param = isReady ? getKey(query) : null
  const { data, error } = useSWR(param, getPokemons)
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
