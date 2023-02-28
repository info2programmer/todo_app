import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='p-4'>
        <nav>
            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white'>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/about`}>About</Link></li>
                <li><Link href={`/todo`}>Todo</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header