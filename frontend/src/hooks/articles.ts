import { useRouter } from 'next/router'
import { useState } from 'react'
import { UseFormSetError } from 'react-hook-form'

import axios from '../lib/axios'
import { Article } from '../lib/Props'
import { Toast } from '../utils/GeneralFunctions'

type entry = 'id' | 'title' | 'content' | 'date'

export const useArticles = () => {
  const navigate = useRouter()
  const [loading, setLoading] = useState<boolean>(false);

  const createArticle = async (
    article: Article,
    setError: UseFormSetError<Article>
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.post('/api/article', article)
      if (response.status === 204) {
        Toast('Successfully Created an Article', 'success')
        navigate.push('/')
      }
    } catch (error: any) {
      catchErrors(error, setError)
    } finally {
      setLoading(false);
    }
  }

  const catchErrors = (error: any, setError: UseFormSetError<Article>) => {
    if (error.response.status !== 422) {
      Toast(error.message, 'error')
      throw error
    }
    let entries = Object.entries<string>(error.response.data.errors)
    entries.forEach((item: [string, string]) => {
      setError(item[0] as entry, { type: 'custom', message: item[1][0] })
    })
  }

  return {
    createArticle,
    loading,
    setLoading,
  }
}
