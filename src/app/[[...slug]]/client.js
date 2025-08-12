'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../../App'), {
  ssr: false,
  // loading: () => (
  //   <div className="flex items-center justify-center h-screen bg-[#f2f2f2]">
  //     <div className="animate-pulse">Loading Page Builder...</div>
  //   </div>
  // )
})



export function ClientOnly() {
  return <App />
}