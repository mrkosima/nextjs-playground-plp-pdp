import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic'
const DynamicHeader = dynamic(() => import(
   /* webpackChunkName: "my-header" */
  './header'), {
  suspense: true,
})
import { Suspense } from 'react'

export default function Layout({ children, headerId }: PropsWithChildren & { headerId: string }) {
  return (
    <div className="container">
      <Suspense fallback={`Loading...`}>
        <DynamicHeader id={headerId || 'NOT PROVIDED'} />
      </Suspense>

      <main>{children}</main>
    </div>
  )
}