import { ThumbDown, ThumbUp } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import React from 'react'

type Props = {
  loading: boolean
  votes: number
}

const VoteButton: React.FC<Props> = ({ loading, votes }) => {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      size="small"
      endIcon={votes ? <ThumbDown /> : <ThumbUp />}
    >
      {votes ? 'Downvote' : 'Upvote'}
    </LoadingButton>
  )
}

export default VoteButton
