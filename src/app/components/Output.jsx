"use client"

import React from 'react'
import { useAppContext } from '../context'
import Link from 'next/link'

export default function Output() {
    const { recommendation, modal } = useAppContext()

    return modal && (
        <div className='p-5 bg-slate-300 fixed w-full min-h-screen top-0 left-0 h-full overflow-y-auto'>
            <div className=' mt-5 mx-auto w-[640px] max-w-full p-5 rounded-lg bg-[#ffffff] border-t-8 border-slate-700'>
                <h1 className='text-4xl text-center leading-relaxed capitalize'>Felder and silvermann learning model Recommendation</h1>

                <div className='mt-12'>
                    <div className='grid gap-5'>
                        {recommendation?.map((item, index) => (
                            <p
                                key={index}
                                className='text-lg leading-relaxed first:font-medium first:text-center first:capitalize first:text-lg'
                            >
                                {item}
                            </p>
                        ))}
                        <div className='text-center pb-5'>
                            <Link
                                href={'https://cpnjw9a6pf6.typeform.com/to/TbExAns9'}
                                target='_blank'
                                className='px-6 py-3 rounded-lg bg-slate-700 text-white font-medium text-lg'
                            >
                                Give us feedback
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
