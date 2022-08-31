import { ThumbDown, ThumbUp } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import React, { MouseEventHandler } from 'react'

import { useVotes } from '@/hooks/votes'

type Props = {
  id: number
  votes: number
}

const VoteButton: React.FC<Props> = ({ id, votes }) => {
  const { upVoteArticle, downVoteArticle, loading, setLoading } = useVotes()

  const handleVote: MouseEventHandler<HTMLButtonElement> = () => {
    setLoading(true)
    votes ? downVoteArticle(id) : upVoteArticle(id)
  }

  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      size="small"
      endIcon={votes ? <ThumbDown /> : <ThumbUp />}
      onClick={handleVote}
    >
      {votes ? 'Downvote' : 'Upvote'}
    </LoadingButton>
  )
}

export default VoteButton
