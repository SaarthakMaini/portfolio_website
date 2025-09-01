"use client"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-neutral-100">
      <div className="w-10 h-10 border-4 border-neutral-400 border-t-neutral-700 rounded-full animate-spin"></div>
    </div>
  )
}