import { AxiosResponse } from 'axios'
import useSWR from 'swr'

import axios from '../lib/axios'
import { Article } from '../lib/Props'

export const useFetchArticles = () => {
  const fetcher = async (url: string): Promise<Article[]> =>
    await axios(url).then((res: AxiosResponse) => res.data)

  const options = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  }

  const { data, error, isValidating } = useSWR('/api/article', fetcher, options)

  return {
    articles: data,
    isLoading: !error && !data,
    isValidating
  }
}
