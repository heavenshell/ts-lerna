import React from 'react'
import { useRouter } from 'next/router'

import { Page, Loading } from '../components/Page'
import { useGetPokemon } from '../hooks/usePokemon'
import '../../assets/antd-custom.less'

const Index = () => {
  const router = useRouter()
  const { useGetPokemons, onChange } = useGetPokemon(router)
  const { data, isLoading } = useGetPokemons()
  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <Loading />
  }
  const current = 'page' in router.query ? Number(router.query.page) : 0

  return (
    <Page
      results={data.results}
      current={current}
      total={data.count}
      onChange={onChange}
    />
  )
}

export default Index
