import NextNProgress from 'nextjs-progressbar'

const NextProgress = (): JSX.Element => {
  return (
    <NextNProgress
      color="white"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
    />
  )
}

export default NextProgress
