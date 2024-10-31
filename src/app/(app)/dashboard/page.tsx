'use client'
import SearchWindow from '@/components/SearchWindow'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const Page = () => {
  const { data: session } = useSession()
  const { username } = session?.user || {}

  useEffect(() => {
    if (!session || !session.user) return
  }, [session])

  if (!session || !session.user) {
    return <div>PLease Login</div>
  }

  return (
    <div>
      <div>
        <SearchWindow />
      </div>
    </div>
  )
}

export default Page
