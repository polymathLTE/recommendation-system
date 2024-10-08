import Link from 'next/link'
import React from 'react'

export default function Homepage() {

    return (
        <div className='flex min-h-screen h-full place-items-center'>
            <div className='p-5 w-[640px] max-w-full mx-auto text-center grid gap-7'>
                <h1 className='text-4xl'>
                    Federal University of Technology, Akure
                </h1>
                <h2 className='text-3xl'>
                    Center For Entrepreneurship (CENT)
                </h2>
                <h2 className='text-3xl'>
                    FUTA Learning Improvement System
                </h2>
                <h3 className='text-2xl'>
                    To assess individual learning preferences across various dimensions
                </h3>
                <h3 className='text-2xl'>
                    ENT Trade: Computer Applications 
                </h3>
                <h3 className='text-2xl'>
                    Supervised By
                </h3>
                <h3 className='text-2xl'>
                    Mr. Ogunbodede
                </h3>
                <h3 className='text-2xl'>
                    &
                </h3>
                <h3 className='text-2xl'>
                    Mrs. Victoria Omoniyi
                </h3>
                <Link
                    className='bg-slate-700 px-6 py-4 text-lg text-white rounded-lg'
                    href={'/input'}
                >
                    Continue
                </Link>
            </div>
        </div>
    )
}
