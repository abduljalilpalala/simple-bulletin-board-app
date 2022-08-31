import { useState } from 'react'
import { AxiosResponse } from 'axios'
import { mutate } from 'swr'

import axios from '@/lib/axios'
import { Toast } from '@/utils/GeneralFunctions'

export const useVotes = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const upVoteArticle = async (articleId: number): Promise<void> => {
    try {
      setLoading(true)
      const response: AxiosResponse<any, any> = await axios.post('/api/vote', {
        id: articleId,
      })
      if (response.status === 204) {
        await mutate(`/api/article/${articleId}`)
        Toast('Upvoted an Article!', 'success')
      }
    } catch (error: any) {
      Toast(error.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  const downVoteArticle = async (articleId: number): Promise<void> => {
    try {
      setLoading(true)
      const response: AxiosResponse<any, any> = await axios.put(
        `/api/vote/${articleId}`
      )
      if (response.status === 204) {
        await mutate(`/api/article/${articleId}`)
        Toast('Downvoted an Article!', 'success')
      }
    } catch (error: any) {
      Toast(error.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return {
    upVoteArticle,
    downVoteArticle,
    loading,
    setLoading,
  }
}
