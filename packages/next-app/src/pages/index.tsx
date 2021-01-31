import React from 'react'
import { useRouter } from 'next/router'

import { Page, Loading } from '../components/Page'
import { useGetPokemons } from '../hooks/usePokemon'
import '../../assets/antd-custom.less'

const Index = () => {
  const router = useRouter()
  const { data, isLoading } = useGetPokemons(router.isReady, router.query)
  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <Loading />
  }
  const onChange = (page: number) => {
    const query = `?page=${page}`
    router.push(`/${query}`)
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
