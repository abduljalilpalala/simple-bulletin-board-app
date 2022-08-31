import { useRouter } from 'next/router'
import { useState } from 'react'
import { UseFormSetError } from 'react-hook-form'

import axios from '@/lib/axios'
import { Toast } from '@/utils/GeneralFunctions'
import { Article, Fields } from '@/lib/Props'
import { AxiosResponse } from 'axios'

export const useArticles = () => {
  const navigate = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const createArticle = async (
    article: Article,
    setError: UseFormSetError<Article>
  ): Promise<void> => {
    try {
      setLoading(true)
      const response: AxiosResponse<any, any> = await axios.post(
        '/api/article',
        article
      )
      if (response.status === 204) {
        Toast('Successfully Created an Article', 'success')
        navigate.push('/')
      }
    } catch (error: any) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  const editArticle = async (
    article: Article,
    setError: UseFormSetError<Article>
  ): Promise<void> => {
    try {
      setLoading(true)
      const response: AxiosResponse<any, any> = await axios.put(
        `/api/article/${article.id}`,
        article
      )
      if (response.status === 204) {
        Toast('Successfully Updated an Article', 'success')
        navigate.push('/')
      }
    } catch (error: any) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  const catchErrors = (error: any, setError: UseFormSetError<Article>) => {
    if (error.response.status !== 422) {
      Toast(error.message, 'error')
      throw error
    }
    let entries = Object.entries<string>(error.response.data.errors)
    entries.forEach((item: [string, string]) => {
      setError(item[0] as Fields, { type: 'custom', message: item[1][0] })
    })
  }

  return {
    createArticle,
    editArticle,
    loading,
    setLoading,
  }
}
