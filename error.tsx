"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-[#e49400]">500 - Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 rounded-xl bg-[#e49400] text-black font-semibold hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  )
}
