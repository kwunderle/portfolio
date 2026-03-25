import React from 'react'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <main>
        <Outlet/>
        BASE LAYOUT!!!!!!!!!!!!!!!
    </main>
  )
}

export default layout