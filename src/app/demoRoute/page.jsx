import React from 'react'
import MobileTab from '@/components/MobileTab'

const page = () => {
  return (
    <div>
      <h1>App route works fine</h1>
      <div className="tab-container w-full fixed bottom-0 md:hidden">
        <MobileTab />
      </div>
    </div>
  )
}

export default page
