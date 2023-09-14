'use client'

const SecondCardError = ({
  error,
  reset
}: {
  error: Error & { digest?: string },
  reset: () => void
}) => {
  return (
    <div className="bg-green-500 text-white p-4 flex flex-col">
      <h1>Second Card Error</h1>
      <span>{error.message}</span>
      <button onClick={reset} className="bg-neutral-300 text-black mt-2 p-1 w-fit">Reintentar</button>
    </div>
  )
}

export default SecondCardError