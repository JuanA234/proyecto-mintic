import type { NextPage } from 'next'
import React from 'react'
import Link from "next/link"
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <Head>
        <title>Home | Gestión de proyectos</title>
      </Head>
      <p>Pagina de index</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'> ir a admin usuarios</a>
      </Link>
      <div>
        <i className="fas fa-home"></i>
      </div>
    </div>
  )
}

export default Home
