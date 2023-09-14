'use client'

const GlobalError = ({
  error,
  reset
}: {
  error: Error & { digest?: string },
  reset: () => void
}) => {
  return (
    <div>
      <h1>GlobalError</h1>
      <span>{error.message}</span>
      <button onClick={reset}>Reintentar</button>
    </div>
  )
}

export default GlobalError