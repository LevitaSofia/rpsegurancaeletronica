'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-8 h-8 rounded-full border-4 border-brand-neon border-t-transparent animate-spin"></span>
      </div>
    }>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
