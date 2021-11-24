import type { NextPage } from 'next'
import React from 'react'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Pagina de index - prueba dev</p>
      <Link href='/admin/usuarios'>
      <a className='cursor-pointer'> ir a admin usuarios</a>
      </Link>
    </div>
  )
}

export default Home
