'use client'

const FirstCardError = ({
  error,
  reset
}: {
  error: Error & { digest?: string },
  reset: () => void
}) => {
  return (
    <div className="bg-red-500 text-white p-4 flex flex-col">
      <h1>First Card Error</h1>
      <span>{error.message}</span>
      <button onClick={reset} className="bg-neutral-300 text-black mt-2 p-1 w-fit">Reintentar</button>
    </div>
  )
}

export default FirstCardError